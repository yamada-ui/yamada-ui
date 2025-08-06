"use client"

import type { PropsWithChildren } from "react"
import createEmotionCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import weakMemoize from "@emotion/weak-memoize"
import { styled, UIProvider, useColorMode, useTheme } from "@yamada-ui/react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const createCache = weakMemoize((container: Node) =>
  createEmotionCache({
    key: "iframe-css",
    container,
  }),
)

interface IframeProps extends PropsWithChildren {}

export function Iframe({ children }: IframeProps) {
  const { colorMode } = useColorMode()
  const { themeScheme } = useTheme()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const headRef = useRef<HTMLHeadElement | null>(null)
  const bodyRef = useRef<HTMLElement | null>(null)
  const head = headRef.current
  const body = bodyRef.current
  const [, forceUpdate] = useState({})

  useEffect(() => {
    if (!iframeRef.current) return

    const iframe = iframeRef.current

    headRef.current = iframe.contentDocument?.head ?? null
    bodyRef.current = iframe.contentDocument?.body ?? null

    forceUpdate({})
  }, [])

  useEffect(() => {
    if (!iframeRef.current) return

    const iframe = iframeRef.current

    if (iframe.contentDocument) {
      iframe.contentDocument.documentElement.dataset.mode = colorMode
      iframe.contentDocument.documentElement.dataset.theme = themeScheme
      iframe.contentDocument.documentElement.style.colorScheme = colorMode
    }
  }, [colorMode, themeScheme])

  return (
    <styled.iframe
      ref={iframeRef}
      border="1px solid"
      borderColor="border"
      h="xl"
      rounded="12"
      title="preview-iframe"
      w="full"
    >
      {head && body
        ? createPortal(
            <CacheProvider value={createCache(head)}>
              <UIProvider>{children}</UIProvider>
            </CacheProvider>,
            body,
          )
        : null}
    </styled.iframe>
  )
}
