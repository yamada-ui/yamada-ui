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
import {
  HTML_TO_IMAGE_VERSION,
  REACT_VERSION,
  YAMADA_UI_VERSION,
} from "./versions"

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
          const dataUrl = await toPng(document.getElementById("root"))
          window.parent.postMessage({ type: "screenshot-data", dataUrl }, "*")
        } catch (e) {
          window.parent.postMessage({ type: "screenshot-error", message: e.message }, "*")
        }
      }
    })
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
  error: null | string
  isCompiling: boolean
  ref?: Ref<PreviewHandle>
}

export function Preview({
  ref,
  compiledCode,
  error,
  isCompiling,
}: PreviewProps) {
  const t = useTranslations("playground")
  const { colorMode } = useColorMode()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isIframeReady, setIsIframeReady] = useState(false)
  const [isPreviewUpdating, setIsPreviewUpdating] = useState(false)
  const [runtimeError, setRuntimeError] = useState<null | string>(null)
  const [consoleErrors, setConsoleErrors] = useState<string[]>([])
  const screenshotResolveRef = useRef<((dataUrl: string) => void) | null>(null)
  const screenshotRejectRef = useRef<((err: Error) => void) | null>(null)

  const handleIframeLoad = useCallback(() => {
    setIsIframeReady(false)
  }, [])

  const postUpdate = useCallback(() => {
    if (!compiledCode || !iframeRef.current?.contentWindow) return

    setIsIframeReady(false)
    setIsPreviewUpdating(true)
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

  const requestScreenshot = useCallback(() => {
    return new Promise<string>((resolve, reject) => {
      screenshotResolveRef.current = resolve
      screenshotRejectRef.current = reject
      iframeRef.current?.contentWindow?.postMessage({ type: "screenshot" }, "*")
    })
  }, [])

  assignRef(ref, { requestScreenshot })

  useWindowEvent(
    "message",
    useCallback((event: MessageEvent) => {
      if (event.source !== iframeRef.current?.contentWindow) return
      if (event.data?.type === "runtime-error") {
        setIsPreviewUpdating(false)
        setRuntimeError(event.data.message as string)
      } else if (event.data?.type === "console-error") {
        setConsoleErrors((prev) => [...prev, event.data.message as string])
      } else if (event.data?.type === "ready") {
        setIsIframeReady(true)
        setIsPreviewUpdating(false)
        setRuntimeError(null)
      } else if (event.data?.type === "screenshot-data") {
        screenshotResolveRef.current?.(event.data.dataUrl as string)
        screenshotResolveRef.current = null
        screenshotRejectRef.current = null
      } else if (event.data?.type === "screenshot-error") {
        screenshotRejectRef.current?.(new Error(event.data.message as string))
        screenshotResolveRef.current = null
        screenshotRejectRef.current = null
      }
    }, []),
  )

  useEffect(() => {
    postUpdate()
  }, [postUpdate])

  useEffect(() => {
    if (!isIframeReady) return
    iframeRef.current?.contentWindow?.postMessage(
      { type: "color-mode", colorMode },
      "*",
    )
  }, [colorMode, isIframeReady])

  const loadingLabel =
    isCompiling || isPreviewUpdating
      ? t("compiling")
      : t("initializingCompiler")

  return (
    <Box h="full" overflow="auto" position="relative">
      {error ? (
        <ErrorDisplay error={error} isCompileError />
      ) : (
        <Box h="full" position="relative">
          {runtimeError ? (
            <Box
              bottom={0}
              left={0}
              position="absolute"
              right={0}
              top={0}
              zIndex={3}
            >
              <ErrorDisplay error={runtimeError} isCompileError={false} />
            </Box>
          ) : null}
          {!runtimeError && (isCompiling || !compiledCode || !isIframeReady) ? (
            <LoadingOverlay label={loadingLabel} />
          ) : null}
          <Box
            ref={iframeRef}
            as="iframe"
            border="none"
            h="full"
            sandbox="allow-scripts"
            srcDoc={IFRAME_TEMPLATE}
            title="Component preview"
            w="full"
            onLoad={handleIframeLoad}
          />
          {consoleErrors.length > 0 && !runtimeError ? (
            <ConsoleErrorsPanel errors={consoleErrors} />
          ) : null}
        </Box>
      )}
    </Box>
  )
}

interface ErrorDisplayProps {
  error: string
  isCompileError: boolean
}

function ErrorDisplay({ error, isCompileError }: ErrorDisplayProps) {
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
      <Text fontWeight="bold">
        {isCompileError ? "Compile Error" : "Runtime Error"}
      </Text>
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
      bottom={0}
      gap="sm"
      justifyContent="center"
      left={0}
      position="absolute"
      right={0}
      role="status"
      top={0}
      zIndex={1}
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
      borderTop="1px solid"
      borderTopColor="danger"
      bottom={0}
      fontFamily="mono"
      fontSize="xs"
      left={0}
      maxH="160px"
      overflow="auto"
      p="sm"
      position="absolute"
      right={0}
      role="log"
      zIndex={2}
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
