import { readFileSync, statfsSync } from "node:fs"
import { availableParallelism, freemem, tmpdir, totalmem } from "node:os"

function readResource(path) {
  try {
    return readFileSync(path, "utf8").trim()
  } catch {
    return undefined
  }
}

function pageLocation(page) {
  const url = new URL(page.url())

  return url.origin === "null"
    ? `${url.protocol}${url.pathname}`
    : `${url.origin}${url.pathname}`
}

export default class BrowserDiagnostics {
  timer
  browsers = new WeakSet()

  record(event, details = {}) {
    process.stderr.write(
      `[browser-diagnostics] ${JSON.stringify({
        time: new Date().toISOString(),
        event,
        ...details,
      })}\n`,
    )
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
      this.record("diagnostics-error", { message: String(error) })
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
    await project.browser.initBrowserProvider(project)

    const provider = project.browser.provider

    if (provider.name !== "playwright" || provider.browserName !== "chromium")
      return

    const setPage = provider.pages.set.bind(provider.pages)

    provider.pages.set = (sessionId, page) => {
      setPage(sessionId, page)
      void this.observePage(provider, sessionId, page)

      return provider.pages
    }
  }

  async observePage(provider, sessionId, page) {
    try {
      const browser = provider.browser

      this.record("page-open", { sessionId, url: pageLocation(page) })
      page.on("crash", () => this.sample("page-crash", { sessionId }))
      page.on("close", () => this.sample("page-close", { sessionId }))
      page.on("framenavigated", (frame) => {
        if (frame === page.mainFrame())
          this.record("page-navigation", { sessionId, url: pageLocation(page) })
      })

      if (!this.browsers.has(browser)) {
        this.browsers.add(browser)
        this.record("browser-connected", { version: browser.version() })
        browser.on("disconnected", () => this.sample("browser-disconnected"))
      }

      const cdp = await page.context().newCDPSession(page)

      cdp.on("Network.webSocketClosed", ({ requestId, timestamp }) => {
        this.sample("websocket-close", { sessionId, requestId, timestamp })
      })
      cdp.on("Network.webSocketFrameError", ({ requestId, errorMessage }) => {
        this.record("websocket-error", { sessionId, requestId, errorMessage })
      })
      cdp.on("Inspector.targetCrashed", () => {
        this.sample("target-crash", { sessionId })
      })
      await cdp.send("Network.enable")
      await cdp.send("Inspector.enable")
    } catch (error) {
      this.record("diagnostics-error", { sessionId, message: String(error) })
    }
  }

  onTestModuleStart(testModule) {
    this.record("test-start", { file: testModule.moduleId })
  }

  onTestRunEnd(_, errors, reason) {
    clearInterval(this.timer)
    this.sample("end", { reason, errors: errors.map(({ message }) => message) })
  }
}
