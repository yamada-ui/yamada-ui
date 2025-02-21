import type { RefObject } from "react"
import { useRef } from "react"
import { pickObject } from "../../utils"

export interface UseAutosizeProps {
  ref: RefObject<HTMLTextAreaElement | null>
  maxRows: number
  minRows: number
}

export const useAutosize = ({ ref, maxRows, minRows }: UseAutosizeProps) => {
  const valueRef = useRef<string>(null)

  const resizeTextarea = () => {
    const el = ref.current
    if (!el) return

    let { placeholder, value } = el
    if (value === valueRef.current) return
    else valueRef.current = value

    value ||= placeholder || "x"

    const nodeSizeData = getSizingData(el)

    if (!nodeSizeData) return

    const rows = calcRows(el, nodeSizeData, value, maxRows, minRows)

    el.rows = rows
  }

  return resizeTextarea
}

export type UseAutosizeReturn = ReturnType<typeof useAutosize>

const SIZING_STYLE = [
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

type SizingProps = Extract<
  (typeof SIZING_STYLE)[number],
  keyof CSSStyleDeclaration
>

interface SizingStyle extends Pick<CSSStyleDeclaration, SizingProps> {}

interface SizingData {
  borderSize: number
  paddingSize: number
  singleRowHeight: number
  sizingStyle: SizingStyle
}

const getSizingData = (el: HTMLElement): null | SizingData => {
  const style = window.getComputedStyle(el) as CSSStyleDeclaration | undefined

  if (style == null) return null

  const sizingStyle = pickObject(
    style,
    SIZING_STYLE as unknown as SizingProps[],
  )
  const { boxSizing } = sizingStyle

  if (boxSizing === "") return null

  const paddingSize =
    parseFloat(sizingStyle.paddingBottom!) + parseFloat(sizingStyle.paddingTop!)

  const borderSize =
    parseFloat(sizingStyle.borderBottomWidth!) +
    parseFloat(sizingStyle.borderTopWidth!)

  const singleRowHeight = parseFloat(sizingStyle.lineHeight!)

  return {
    borderSize,
    paddingSize,
    singleRowHeight,
    sizingStyle,
  }
}

const calcRows = (
  el: HTMLTextAreaElement,
  sizingData: SizingData,
  value: string,
  maxRows: number,
  minRows: number,
) => {
  const clone = el.cloneNode() as HTMLTextAreaElement
  Object.assign(clone.style, sizingData.sizingStyle)
  forceHiddenStyles(clone)

  clone.value = value
  document.body.appendChild(clone)

  let rows
  if (clone.scrollHeight) {
    const rowHeight = sizingData.singleRowHeight
    rows = Math.min(
      maxRows,
      Math.max(minRows, Math.floor(clone.scrollHeight / rowHeight)),
    )
  } else {
    const lineBreaks = (value.match(/\n/g) || []).length
    rows = Math.min(maxRows, Math.max(minRows, lineBreaks + 1))
  }

  document.body.removeChild(clone)

  return rows
}

const HIDDEN_TEXTAREA_STYLE = {
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

const forceHiddenStyles = (el: HTMLElement) => {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach((key) => {
    el.style.setProperty(
      key,
      HIDDEN_TEXTAREA_STYLE[key as keyof typeof HIDDEN_TEXTAREA_STYLE],
      "important",
    )
  })
}
