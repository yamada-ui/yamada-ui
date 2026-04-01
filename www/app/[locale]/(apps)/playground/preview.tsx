"use client"

import type { Ref } from "react"
import {
  assignRef,
  Box,
  HStack,
  Loading,
  Text,
  useColorMode,
  useWindowEvent,
} from "@yamada-ui/react"
import { useTranslations } from "next-intl"
import { useCallback, useEffect, useRef, useState } from "react"
import { deferScreenshotWork } from "./screenshot"
import {
  HTML_TO_IMAGE_VERSION,
  REACT_VERSION,
  YAMADA_UI_VERSION,
} from "./versions"

type IframeMessage =
  | { dataUrl: string; type: "screenshot-data" }
  | { message: string; type: "console-error" }
  | { message: string; type: "runtime-error" }
  | { message: string; type: "screenshot-error" }
  | { type: "iframe-ready" }
  | { type: "ready" }

function createIframeTemplate() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>body { margin: 0; padding: 16px; }</style>
</head>
<body>
  <div id="root"></div>
  <script>
    try {
      const _mem = Object.create(null)
      const mock = {
        getItem: function(k) { return Object.prototype.hasOwnProperty.call(_mem, k) ? _mem[k] : null },
        setItem: function(k, v) { _mem[k] = String(v) },
        removeItem: function(k) { delete _mem[k] },
        clear: function() { for (var k in _mem) delete _mem[k] },
        key: function(i) { return Object.keys(_mem)[i] ?? null },
        get length() { return Object.keys(_mem).length },
      }
      Object.defineProperty(window, "localStorage", { configurable: true, value: mock })
      Object.defineProperty(window, "sessionStorage", { configurable: true, value: mock })
    } catch {}
  </script>
  <script type="module">
    import { createRoot } from "https://esm.sh/react-dom@${REACT_VERSION}/client?target=es2022"
    import * as ReactExports from "https://esm.sh/react@${REACT_VERSION}?target=es2022"
    import * as YamadaUIExports from "https://esm.sh/@yamada-ui/react@${YAMADA_UI_VERSION}?target=es2022&deps=react@${REACT_VERSION},react-dom@${REACT_VERSION}"
    const { createElement } = ReactExports
    const { UIProvider, useColorMode } = YamadaUIExports
    Object.assign(globalThis, ReactExports, YamadaUIExports, { React: ReactExports })
    const root = createRoot(document.getElementById("root"))

    let _App = null
    let _changeColorMode = null

    function AppContainer() {
      const { changeColorMode } = useColorMode()
      _changeColorMode = changeColorMode
      return _App ? createElement(_App) : null
    }

    function renderApp() {
      root.render(createElement(UIProvider, null, createElement(AppContainer)))
    }

    function postError(message) {
      window.parent.postMessage({ type: "runtime-error", message: String(message) }, "*")
    }

    function deferScreenshotWork(timeout = 120) {
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          if (typeof requestIdleCallback === "function") {
            requestIdleCallback(() => resolve(), { timeout })
          } else {
            setTimeout(resolve, 0)
          }
        })
      })
    }

    window.onerror = function(_msg, _src, _line, _col, err) {
      postError(err ? err.message : _msg)
      return true
    }

    window.addEventListener("unhandledrejection", function(event) {
      postError(event.reason?.message ?? String(event.reason))
    })

    const _origConsoleError = console.error.bind(console)
    console.error = function(...args) {
      _origConsoleError(...args)
      const message = args.map(function(a) { return a instanceof Error ? a.message : String(a) }).join(" ")
      window.parent.postMessage({ type: "console-error", message }, "*")
    }

    window.addEventListener("message", async ({ data }) => {
      if (data.type === "update") {
        try {
          const url = "data:text/javascript;charset=utf-8," + encodeURIComponent(data.code)
          const { default: App } = await import(url)
          _App = App
          renderApp()
          window.parent.postMessage({ type: "ready" }, "*")
        } catch (e) {
          postError(e.message)
        }
      } else if (data.type === "color-mode") {
        if (_changeColorMode) {
          _changeColorMode(data.colorMode)
        } else {
          localStorage.setItem("color-mode", data.colorMode)
        }
      } else if (data.type === "screenshot") {
        try {
          try { new Image() } catch (_) {
            window.Image = function(w, h) {
              const img = document.createElement("img")
              if (w !== undefined) img.width = w
              if (h !== undefined) img.height = h
              return img
            }
            window.Image.prototype = HTMLImageElement.prototype
          }
          const { toPng } = await import("https://esm.sh/html-to-image@${HTML_TO_IMAGE_VERSION}")
          await deferScreenshotWork()
          const dataUrl = await toPng(document.getElementById("root"))
          window.parent.postMessage({ type: "screenshot-data", dataUrl }, "*")
        } catch (e) {
          window.parent.postMessage({ type: "screenshot-error", message: e.message }, "*")
        }
      }
    })
    window.parent.postMessage({ type: "iframe-ready" }, "*")
  </script>
</body>
</html>`
}

const IFRAME_TEMPLATE = createIframeTemplate()

export interface PreviewHandle {
  requestScreenshot: () => Promise<string>
}

interface PreviewProps {
  compiledCode: null | string
  compiling: boolean
  error: null | string
  ref?: Ref<PreviewHandle>
}

export function Preview({ ref, compiledCode, compiling, error }: PreviewProps) {
  const t = useTranslations("playground")
  const { colorMode } = useColorMode()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeReady, setIframeReady] = useState(false)
  const [previewUpdating, setPreviewUpdating] = useState(false)
  const [runtimeError, setRuntimeError] = useState<null | string>(null)
  const [consoleErrors, setConsoleErrors] = useState<string[]>([])
  const screenshotResolveRef = useRef<((dataUrl: string) => void) | null>(null)
  const screenshotRejectRef = useRef<((err: Error) => void) | null>(null)
  const iframeInitializedRef = useRef(false)

  const handleIframeLoad = useCallback(() => {
    setIframeReady(false)
  }, [])

  const postUpdate = useCallback(() => {
    if (!compiledCode || !iframeRef.current?.contentWindow) return
    if (!iframeInitializedRef.current) return

    setIframeReady(false)
    setPreviewUpdating(true)
    setRuntimeError(null)
    setConsoleErrors([])
    iframeRef.current.contentWindow.postMessage(
      { type: "color-mode", colorMode },
      "*",
    )
    iframeRef.current.contentWindow.postMessage(
      { type: "update", code: compiledCode },
      "*",
    )
  }, [compiledCode, colorMode])

  useEffect(() => {
    postUpdate()
  }, [postUpdate])

  const requestScreenshot = useCallback(() => {
    return new Promise<string>((resolve, reject) => {
      if (!iframeRef.current?.contentWindow || !iframeInitializedRef.current) {
        reject(new Error("Preview not initialized"))
        return
      }
      void (async () => {
        await deferScreenshotWork()
        screenshotResolveRef.current = resolve
        screenshotRejectRef.current = reject
        iframeRef.current?.contentWindow?.postMessage(
          { type: "screenshot" },
          "*",
        )
      })().catch((error) => {
        reject(error instanceof Error ? error : new Error(String(error)))
      })
    })
  }, [])

  assignRef(ref, { requestScreenshot })

  useWindowEvent("message", (event: MessageEvent<IframeMessage>) => {
    if (event.source !== iframeRef.current?.contentWindow) return
    const msg = event.data
    switch (msg.type) {
      case "iframe-ready":
        iframeInitializedRef.current = true
        postUpdate()
        break
      case "runtime-error":
        setPreviewUpdating(false)
        setRuntimeError(msg.message)
        break
      case "console-error":
        setConsoleErrors((prev) => [...prev, msg.message])
        break
      case "ready":
        setIframeReady(true)
        setPreviewUpdating(false)
        setRuntimeError(null)
        break
      case "screenshot-data":
        screenshotResolveRef.current?.(msg.dataUrl)
        screenshotResolveRef.current = null
        screenshotRejectRef.current = null
        break
      case "screenshot-error":
        screenshotRejectRef.current?.(new Error(msg.message))
        screenshotResolveRef.current = null
        screenshotRejectRef.current = null
        break
    }
  })

  useEffect(() => {
    if (!iframeReady) return
    iframeRef.current?.contentWindow?.postMessage(
      { type: "color-mode", colorMode },
      "*",
    )
  }, [colorMode, iframeReady])

  const loadingLabel =
    compiling || previewUpdating ? t("compiling") : t("initializingCompiler")

  return (
    <Box h="full" overflow="auto" position="relative">
      {error ? (
        <ErrorDisplay error={error} title="Compile Error" />
      ) : (
        <Box h="full" position="relative">
          <Box
            ref={iframeRef}
            as="iframe"
            border="none"
            h="full"
            sandbox="allow-scripts"
            srcDoc={IFRAME_TEMPLATE}
            title={t("componentPreview")}
            w="full"
            onLoad={handleIframeLoad}
          />
          {consoleErrors.length > 0 && !runtimeError ? (
            <ConsoleErrorsPanel errors={consoleErrors} />
          ) : null}
          {!runtimeError && (compiling || !compiledCode || !iframeReady) ? (
            <LoadingOverlay label={loadingLabel} />
          ) : null}
          {runtimeError ? (
            <Box inset={0} position="absolute">
              <ErrorDisplay error={runtimeError} title="Runtime Error" />
            </Box>
          ) : null}
        </Box>
      )}
    </Box>
  )
}

interface ErrorDisplayProps {
  error: string
  title: string
}

function ErrorDisplay({ error, title }: ErrorDisplayProps) {
  return (
    <Box
      bg="bg.panel"
      color="danger"
      fontFamily="mono"
      fontSize="sm"
      h="full"
      overflow="auto"
      p="md"
      role="alert"
      whiteSpace="pre-wrap"
    >
      <Text fontWeight="bold">{title}</Text>
      <Text mt="xs">{error}</Text>
    </Box>
  )
}

interface LoadingOverlayProps {
  label: string
}

function LoadingOverlay({ label }: LoadingOverlayProps) {
  return (
    <HStack
      bg="bg"
      gap="sm"
      inset={0}
      justifyContent="center"
      position="absolute"
      role="status"
    >
      <Loading.Oval color="fg.muted" fontSize="lg" />
      <Text color="fg.muted" fontSize="sm">
        {label}
      </Text>
    </HStack>
  )
}

interface ConsoleErrorsPanelProps {
  errors: string[]
}

function ConsoleErrorsPanel({ errors }: ConsoleErrorsPanelProps) {
  return (
    <Box
      aria-label="Console Errors"
      bg="bg.panel"
      borderTopColor="danger"
      borderTopWidth="1px"
      bottom={0}
      fontFamily="mono"
      fontSize="xs"
      left={0}
      maxH="40"
      overflow="auto"
      p="sm"
      position="absolute"
      right={0}
      role="log"
    >
      <Text color="danger" fontWeight="bold" mb="xs">
        Console Errors
      </Text>
      {errors.map((msg, i) => (
        <Text key={i} color="danger" whiteSpace="pre-wrap">
          {msg}
        </Text>
      ))}
    </Box>
  )
}
