"use client"

import type { Dispatch, SetStateAction } from "react"
import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { codeToHighlightedHtml } from "./code-to-html"

export interface UseCodeBlockProps {
  code?: string
  defaultCollapsed?: boolean
  highlight?: string
  language?: string
  lineNumbers?: boolean
  maxLines?: number
  showCopyTrigger?: boolean
  showLanguageLabel?: boolean
  title?: string
}

const getLineCount = (value?: string) => {
  if (!value) return 0

  return value.split(/\r?\n/).length
}

const getCollapsedHeight = (node: HTMLElement | null, lineCount: number) => {
  if (!node || !lineCount) return 0

  const computedStyle = window.getComputedStyle(node)
  const lineHeight = Number.parseFloat(computedStyle.lineHeight)
  const paddingTop = Number.parseFloat(computedStyle.paddingTop)
  const paddingBottom = Number.parseFloat(computedStyle.paddingBottom)
  const borderTopWidth = Number.parseFloat(computedStyle.borderTopWidth)
  const borderBottomWidth = Number.parseFloat(computedStyle.borderBottomWidth)

  return Math.ceil(
    lineHeight * lineCount +
      paddingTop +
      paddingBottom +
      borderTopWidth +
      borderBottomWidth,
  )
}

export const useCodeBlock = ({
  code,
  defaultCollapsed = false,
  highlight,
  language = "ts",
  lineNumbers = false,
  maxLines,
  showCopyTrigger = true,
  showLanguageLabel = true,
  title,
}: UseCodeBlockProps = {}) => {
  const contentId = useId()
  const lineCount = useMemo(() => getLineCount(code), [code])
  const collapsible = !!maxLines && lineCount > maxLines
  const [collapsed, setCollapsed] = useState(defaultCollapsed)
  const [collapsedHeight, setCollapsedHeight] = useState(0)

  return useMemo(
    () => ({
      code,
      collapsed,
      collapsedHeight,
      collapsible,
      contentId,
      defaultCollapsed,
      highlight,
      language,
      lineCount,
      lineNumbers,
      maxLines,
      setCollapsed,
      setCollapsedHeight,
      showCopyTrigger,
      showLanguageLabel,
      title,
    }),
    [
      code,
      collapsed,
      collapsedHeight,
      collapsible,
      contentId,
      defaultCollapsed,
      highlight,
      language,
      lineCount,
      lineNumbers,
      maxLines,
      showCopyTrigger,
      showLanguageLabel,
      title,
    ],
  )
}

export type UseCodeBlockReturn = ReturnType<typeof useCodeBlock>

export interface UseCodeBlockCodeProps {
  setCollapsedHeight: Dispatch<SetStateAction<number>>
  code?: string
  highlight?: string
  html?: string
  language?: string
  maxLines?: number
}

export const useCodeBlockCode = ({
  code,
  highlight,
  html: htmlProp,
  language = "ts",
  maxLines,
  setCollapsedHeight,
}: UseCodeBlockCodeProps) => {
  const ref = useRef<HTMLPreElement>(null)
  const [internalHtml, setInternalHtml] = useState<string | undefined>()
  const lines = useMemo(() => code?.split(/\r?\n/) ?? [], [code])

  useEffect(() => {
    if (htmlProp !== undefined) return

    if (!code) {
      setInternalHtml(undefined)

      return
    }

    let mounted = true

    setInternalHtml(undefined)

    codeToHighlightedHtml(code, { highlight, language })
      .then((nextHtml) => {
        if (mounted) setInternalHtml(nextHtml)
      })
      .catch(() => {
        if (mounted) setInternalHtml(undefined)
      })

    return () => {
      mounted = false
    }
  }, [code, highlight, htmlProp, language])

  const html = htmlProp ?? internalHtml

  useLayoutEffect(() => {
    if (!maxLines) return

    setCollapsedHeight(getCollapsedHeight(ref.current, maxLines))
  }, [html, lines.length, maxLines, setCollapsedHeight])

  return { ref, html, lines }
}

export type UseCodeBlockCodeReturn = ReturnType<typeof useCodeBlockCode>
