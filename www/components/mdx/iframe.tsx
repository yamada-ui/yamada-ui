"use client"

import type { HTMLStyledProps } from "@yamada-ui/react"
import createEmotionCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import weakMemoize from "@emotion/weak-memoize"
import { styled, UIProvider, useColorMode, useTheme } from "@yamada-ui/react"
import { useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const createCache = weakMemoize((container: Node) =>
  createEmotionCache({
    key: "iframe-css",
    container,
  }),
)

interface IframeProps extends HTMLStyledProps<"iframe"> {}

export function Iframe({ children, ...rest }: IframeProps) {
  const { colorMode } = useColorMode()
  const { themeScheme } = useTheme()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const documentRef = useRef<Document | null>(null)
  const [, forceUpdate] = useState({})

  useLayoutEffect(() => {
    if (!iframeRef.current) return

    const iframe = iframeRef.current

    documentRef.current = iframe.contentDocument ?? null

    forceUpdate({})
  }, [])

  useLayoutEffect(() => {
    if (!iframeRef.current) return

    const iframe = iframeRef.current

    if (!iframe.contentDocument) return

    iframe.contentDocument.documentElement.dataset.mode = colorMode
    iframe.contentDocument.documentElement.dataset.theme = themeScheme
    iframe.contentDocument.documentElement.style.colorScheme = colorMode
  }, [colorMode, themeScheme])

  return (
    <styled.iframe
      ref={iframeRef}
      boxSize="full"
      title="preview-iframe"
      {...rest}
    >
      {documentRef.current
        ? createPortal(
            <CacheProvider value={createCache(documentRef.current.head)}>
              <UIProvider rootNode={() => documentRef.current!}>
                {children}
              </UIProvider>
            </CacheProvider>,
            documentRef.current.body,
          )
        : null}
    </styled.iframe>
  )
}
