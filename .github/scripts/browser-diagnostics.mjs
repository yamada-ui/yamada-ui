import { errorMonitor } from "node:events"
import { readFileSync, statfsSync } from "node:fs"
import { availableParallelism, freemem, tmpdir, totalmem } from "node:os"

function readResource(path) {
  try {
    return readFileSync(path, "utf8").trim()
  } catch {
    return undefined
  }
}

function location(value, base) {
  try {
    const url = new URL(value, base)

    return url.origin === "null" ? url.protocol : `${url.origin}${url.pathname}`
  } catch {
    return "[invalid URL]"
  }
}

function message(error) {
  return String(error).replace(/\b(?:https?|wss?):\/\/[^\s"'<>]+/g, (url) =>
    location(url),
  )
}

export default class BrowserDiagnostics {
  timer
  browsers = new WeakSet()
  providers = new WeakSet()
  servers = new WeakSet()
  webSockets = new WeakSet()
  connections = new WeakMap()
  connectionId = 0

  record(event, details = {}) {
    try {
      process.stderr.write(
        `[browser-diagnostics] ${JSON.stringify({
          time: new Date().toISOString(),
          event,
          ...details,
        })}\n`,
      )
    } catch {}
  }

  sample(event = "resources", details = {}) {
    try {
      const directory = process.env.TMPDIR || tmpdir()
      const disk = statfsSync(directory)

      this.record(event, {
        ...details,
        node: process.memoryUsage(),
        freeMemory: freemem(),
        memoryAvailable:
          readResource("/proc/meminfo")?.match(/^MemAvailable:.*$/m)?.[0],
        oomKills: readResource("/proc/vmstat")?.match(/^oom_kill \d+$/m)?.[0],
        diskDirectory: directory,
        diskAvailable: disk.bavail * disk.bsize,
        cgroupMemoryCurrent: readResource("/sys/fs/cgroup/memory.current"),
        cgroupMemoryMax: readResource("/sys/fs/cgroup/memory.max"),
        cgroupMemoryEvents: readResource("/sys/fs/cgroup/memory.events"),
        cgroupMemoryPressure: readResource("/sys/fs/cgroup/memory.pressure"),
      })
    } catch (error) {
      this.record("diagnostics-error", { message: message(error) })
    }
  }

  onInit() {
    this.record("environment", {
      platform: process.platform,
      nodeVersion: process.version,
      cpus: availableParallelism(),
      totalMemory: totalmem(),
    })
    this.sample("start")
    this.timer = setInterval(() => this.sample(), 2000)
    this.timer.unref()
  }

  async onBrowserInit(project) {
    try {
      await project.browser.initBrowserProvider(project)

      const provider = project.browser.provider

      if (provider.name !== "playwright" || provider.browserName !== "chromium")
        return

      this.observeServer(project.browser.vite)

      if (this.providers.has(provider)) return

      this.providers.add(provider)

      const setPage = provider.pages.set.bind(provider.pages)

      provider.pages.set = (sessionId, page) => {
        setPage(sessionId, page)
        void this.observePage(provider, sessionId, page)

        return provider.pages
      }
    } catch (error) {
      this.record("diagnostics-error", { message: message(error) })
    }
  }

  observeSocket(socket, url) {
    if (this.connections.has(socket)) return this.connections.get(socket)

    const connectionId = ++this.connectionId

    this.connections.set(socket, connectionId)
    this.record("server-socket-open", { connectionId, url })
    socket.on(errorMonitor, (error) => {
      this.record("server-socket-error", {
        connectionId,
        message: message(error),
      })
    })
    for (const event of ["timeout", "end", "close"]) {
      socket.on(event, (hadError) => {
        this.record(`server-socket-${event}`, {
          connectionId,
          ...(event === "close" ? { hadError } : {}),
        })
      })
    }

    return connectionId
  }

  observeServer(vite) {
    try {
      if (this.servers.has(vite)) return

      this.servers.add(vite)

      const http = vite.httpServer

      if (http && !this.servers.has(http)) {
        this.servers.add(http)
        http.prependListener("upgrade", (request, socket) => {
          try {
            const url = location(request.url, "http://localhost")
            const connectionId = this.observeSocket(socket, url)

            this.record("server-upgrade", { connectionId, url })
          } catch (error) {
            this.record("diagnostics-error", { message: message(error) })
          }
        })
        http.on("close", () => this.record("server-http-close"))
        http.on(errorMonitor, (error) => {
          this.record("server-http-error", { message: message(error) })
        })
      }

      if (vite.ws && !this.servers.has(vite.ws)) {
        this.servers.add(vite.ws)
        vite.ws.on("connection", (socket, request) => {
          try {
            if (this.webSockets.has(socket)) return

            this.webSockets.add(socket)

            const url = location(request.url, "http://localhost")
            const connectionId = this.observeSocket(request.socket, url)

            this.record("server-websocket-open", { connectionId, url })
            socket.on("close", (code, reason) => {
              this.record("server-websocket-close", {
                connectionId,
                code,
                reason: message(reason),
              })
            })
            socket.on(errorMonitor, (error) => {
              this.record("server-websocket-error", {
                connectionId,
                message: message(error),
              })
            })
          } catch (error) {
            this.record("diagnostics-error", { message: message(error) })
          }
        })
      }

      for (const method of ["close", "restart"]) {
        const original = vite[method]
        const diagnostics = this

        if (typeof original !== "function") continue

        vite[method] = function (...args) {
          diagnostics.record("server-call", {
            method,
            stack: message(
              new Error().stack?.split("\n").slice(2, 8).join("\n"),
            ),
          })

          return Reflect.apply(original, this, args)
        }
      }
    } catch (error) {
      this.record("diagnostics-error", { message: message(error) })
    }
  }

  async observePage(provider, sessionId, page) {
    try {
      const browser = provider.browser

      this.record("page-open", { sessionId, url: location(page.url()) })
      page.on("crash", () => this.sample("page-crash", { sessionId }))
      page.on("close", () => this.sample("page-close", { sessionId }))
      page.on("requestfailed", (request) => {
        this.record("request-failed", {
          sessionId,
          resourceType: request.resourceType(),
          url: location(request.url()),
          message: message(request.failure()?.errorText),
        })
      })
      page.on("framenavigated", (frame) => {
        if (frame === page.mainFrame())
          this.record("page-navigation", {
            sessionId,
            url: location(page.url()),
          })
      })

      if (!this.browsers.has(browser)) {
        this.browsers.add(browser)
        this.record("browser-connected", { version: browser.version() })
        browser.on("disconnected", () => this.sample("browser-disconnected"))
      }

      const cdp = await page.context().newCDPSession(page)

      cdp.on("Network.webSocketCreated", ({ requestId, url }) => {
        this.record("websocket-open", {
          sessionId,
          requestId,
          url: location(url),
        })
      })
      cdp.on("Network.webSocketClosed", ({ requestId, timestamp }) => {
        this.sample("websocket-close", { sessionId, requestId, timestamp })
      })
      cdp.on("Network.webSocketFrameError", ({ requestId, errorMessage }) => {
        this.record("websocket-error", {
          sessionId,
          requestId,
          message: message(errorMessage),
        })
      })
      cdp.on("Inspector.targetCrashed", () => {
        this.sample("target-crash", { sessionId })
      })
      await cdp.send("Network.enable")
      await cdp.send("Inspector.enable")
    } catch (error) {
      this.record("diagnostics-error", { sessionId, message: message(error) })
    }
  }

  onTestModuleStart(testModule) {
    this.record("test-start", { file: testModule.moduleId })
  }

  onTestRunEnd(_, errors, reason) {
    clearInterval(this.timer)
    this.sample("end", {
      reason,
      errors: errors.map(({ message: error }) => message(error)),
    })
  }
}
