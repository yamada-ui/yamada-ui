"use client"

import type { PropGetter } from "../../core"
import { useCallback, useRef } from "react"
import {
  addDomEvent,
  createdDom,
  handlerAll,
  mergeRefs,
  noop,
  pickObject,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "../../utils"

const SIZING_STYLE_PROPERTIES = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak",
] as const

const HIDDEN_STYLE = {
  height: "0",
  "max-height": "none",
  "min-height": "0",
  overflow: "hidden",
  position: "absolute",
  right: "0",
  top: "0",
  visibility: "hidden",
  "z-index": "-1000",
} as const

type SizingProperties = Extract<
  (typeof SIZING_STYLE_PROPERTIES)[number],
  keyof CSSStyleDeclaration
>

interface SizingStyle {
  style: Pick<CSSStyleDeclaration, SizingProperties>
  border: number
  padding: number
  rowHeight: number
}

const getSizingStyle = (el: HTMLElement): null | SizingStyle => {
  const style = window.getComputedStyle(el) as CSSStyleDeclaration | undefined

  if (style == null) return null

  const computedStyle = pickObject(style, SIZING_STYLE_PROPERTIES)

  if (computedStyle.boxSizing === "") return null

  const padding =
    parseFloat(computedStyle.paddingBottom!) +
    parseFloat(computedStyle.paddingTop!)

  const border =
    parseFloat(computedStyle.borderBottomWidth!) +
    parseFloat(computedStyle.borderTopWidth!)

  const rowHeight = parseFloat(computedStyle.lineHeight!)

  return {
    style: computedStyle,
    border,
    padding,
    rowHeight,
  }
}

const setHiddenStyle = (el: HTMLElement) => {
  Object.keys(HIDDEN_STYLE).forEach((key) => {
    el.style.setProperty(
      key,
      HIDDEN_STYLE[key as keyof typeof HIDDEN_STYLE],
      "important",
    )
  })
}

const calcRows = (
  el: HTMLTextAreaElement,
  sizingStyle: SizingStyle,
  value: string,
  maxRows: number,
  minRows: number,
) => {
  const cloneEl = el.cloneNode() as HTMLTextAreaElement

  Object.assign(cloneEl.style, sizingStyle.style)

  setHiddenStyle(cloneEl)

  cloneEl.value = value

  document.body.appendChild(cloneEl)

  let rows: number

  if (cloneEl.scrollHeight) {
    const rowHeight = sizingStyle.rowHeight

    rows = Math.min(
      maxRows,
      Math.max(minRows, Math.floor(cloneEl.scrollHeight / rowHeight)),
    )
  } else {
    const lineBreaks = (value.match(/\n/g) || []).length

    rows = Math.min(maxRows, Math.max(minRows, lineBreaks + 1))
  }

  document.body.removeChild(cloneEl)

  return rows
}

export interface UseAutosizeProps {
  /**
   * If `true`, the Textarea height will not be adjusted.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Autosize up to maxRows rows.
   *
   * @default Infinity
   */
  maxRows?: number
  /**
   * Autosize up to minRows rows.
   *
   * @default 2
   */
  minRows?: number
}

export const useAutosize = ({
  disabled = false,
  maxRows = Infinity,
  minRows = 2,
}: UseAutosizeProps = {}) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const beforeValueRef = useRef<string>(null)
  const value = ref.current?.value ?? ""

  const onResizeTextarea = useCallback(() => {
    const el = ref.current

    if (!el) return

    let { placeholder, value } = el

    if (value === beforeValueRef.current) return

    beforeValueRef.current = value

    value ||= placeholder || "x"

    const sizingStyle = getSizingStyle(el)

    if (!sizingStyle) return

    const rows = calcRows(el, sizingStyle, value, maxRows, minRows)

    el.rows = rows
  }, [ref, maxRows, minRows])

  const getTextareaProps: PropGetter<"textarea"> = useCallback(
    (props = {}) => ({
      ...props,
      ref: mergeRefs(props.ref, ref),
      style: { resize: !disabled ? "none" : undefined, ...props.style },
      onChange: handlerAll(props.onChange, !disabled ? onResizeTextarea : noop),
    }),
    [ref, onResizeTextarea, disabled],
  )

  useSafeLayoutEffect(() => {
    if (!createdDom() || disabled) return

    onResizeTextarea()

    const unsubscribeResize = addDomEvent(window, "resize", onResizeTextarea)
    const unsubscribeLoadingdone = addDomEvent(
      document.fonts,
      "loadingdone",
      onResizeTextarea,
    )

    return () => {
      unsubscribeResize()
      unsubscribeLoadingdone()
    }
  }, [])

  useUpdateEffect(() => {
    if (disabled) return

    onResizeTextarea()
  }, [value])

  return { ref, getTextareaProps, onResizeTextarea }
}

export type UseAutosizeReturn = ReturnType<typeof useAutosize>
