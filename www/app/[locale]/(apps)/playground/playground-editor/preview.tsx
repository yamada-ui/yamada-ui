"use client"

import type { BoxProps, SkeletonProps, StyledProps } from "@yamada-ui/react"
import type { Ref } from "react"
import { Box, mergeRefs, Skeleton, styled, useMounted } from "@yamada-ui/react"
import { useCallback, useEffect, useRef, useState } from "react"
import { usePlaygroundLayout } from "../use-playground-layout"

interface PreviewProps extends SkeletonProps {
  code: string
  previewRef: Ref<HTMLElement>
}

function createWorker(): Worker {
  return new Worker(new URL("../worker.ts", import.meta.url), {
    type: "module",
  })
}

export const Preview = ({ code, previewRef, ...rest }: PreviewProps) => {
  const isMounted = useMounted({ state: true })
  const [error, setError] = useState<null | string>(null)
  const [isReady, setIsReady] = useState(false)
  const isReadyRef = useRef(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const workerRef = useRef<null | Worker>(null)
  const skeletonRef = useRef<HTMLDivElement>(null)

  // const { size } = usePlaygroundLayout()

  // Initialize Worker and message handler
  useEffect(() => {
    if (typeof window !== "undefined") {
      workerRef.current = createWorker()

      workerRef.current.addEventListener("message", (event: MessageEvent) => {
        if (event.data.type === "transform") {
          const code = event.data.code
          if (code && iframeRef.current?.contentWindow && isReadyRef.current) {
            iframeRef.current.contentWindow.postMessage(
              { type: "execute", code },
              "*",
            )
          }
        }
      })

      // Register message handler for iframe communication
      const handleMessage = (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return
        if (!event.data || typeof event.data !== "object") return
        switch (event.data.type) {
          case "ready":
            isReadyRef.current = true
            setIsReady(true)
            break
          case "error":
            setError(event.data.message)
            break
          case "success":
            setError(null)
            break
        }
      }

      window.addEventListener("message", handleMessage, false)

      // Send ping to iframe after a short delay to ensure it's loaded
      const pingTimeout = setTimeout(() => {
        if (iframeRef.current?.contentWindow) {
          iframeRef.current.contentWindow.postMessage({ type: "ping" }, "*")
        }
      }, 100)

      return () => {
        clearTimeout(pingTimeout)
        workerRef.current?.terminate()
        window.removeEventListener("message", handleMessage, false)
      }
    }
  }, [])

  useEffect(() => {
    if (!isReady || !workerRef.current) {
      return
    }

    workerRef.current.postMessage({
      type: "build",
      code,
    })
  }, [code, isReady])

  const previewContent = (
    <PreviewContent
      error={error}
      iframeRef={mergeRefs(previewRef, iframeRef)}
    />
  )

  return (
    <Skeleton
      ref={skeletonRef}
      fitContent
      h="full"
      loading={!isMounted}
      rounded="md"
      w="full"
      {...rest}
    >
      {
        // size !== "auto" ? (
        //   <ResizablePreview minH="200px" minW="200px" skeletonRef={skeletonRef}>
        //     {previewContent}
        //   </ResizablePreview>
        // ) : (
        previewContent
        // )
      }
    </Skeleton>
  )
}

const BORDER_WIDTH = 1

interface PreviewContentProps extends BoxProps {
  error: null | string
  iframeRef: Ref<HTMLIFrameElement | null>
}

const PreviewContent = ({ error, iframeRef, ...rest }: PreviewContentProps) => {
  const { size } = usePlaygroundLayout()

  const getPreviewStyles = useCallback<() => StyledProps>(() => {
    if (size === "auto") {
      return {}
    }

    return {
      h: `${size.y + BORDER_WIDTH * 2}px`,
      mx: "auto",
      w: `${size.x + BORDER_WIDTH * 2}px`,
    }
  }, [size])

  return (
    <Box
      h="full"
      position="relative"
      w="full"
      {...rest}
      {...getPreviewStyles()}
    >
      <styled.iframe
        ref={iframeRef}
        src="/playground/runtime.html"
        borderColor="border"
        borderStyle="solid"
        borderWidth={BORDER_WIDTH}
        display={error ? "none" : "block"}
        h="full"
        rounded="md"
        sandbox="allow-scripts allow-same-origin"
        title="preview"
        w="full"
      />
      {error ? (
        <Box
          alignItems="center"
          bg="danger.solid"
          color="fg.contrast"
          display="flex"
          fontSize="sm"
          h="full"
          justifyContent="center"
          overflowX="auto"
          p="md"
          rounded="md"
        >
          {error}
        </Box>
      ) : null}
    </Box>
  )
}
