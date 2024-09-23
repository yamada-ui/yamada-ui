import { pickObject } from "@yamada-ui/utils"
import type { RefObject } from "react"
import { useRef } from "react"

const useAutosize = (
  ref: RefObject<HTMLTextAreaElement>,
  maxRows: number,
  minRows: number,
) => {
  const valueRef = useRef<string>()

  const resizeTextarea = () => {
    const el = ref.current
    if (!el) return

    let { value, placeholder } = el
    if (value === valueRef.current) return
    else valueRef.current = value

    value ??= placeholder ?? "x"

    const nodeSizeData = getSizingData(el)

    if (!nodeSizeData) return

    const rows = calcRows(el, nodeSizeData, value, maxRows, minRows)

    el.rows = rows
  }

  return resizeTextarea
}

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
  sizingStyle: SizingStyle
  paddingSize: number
  borderSize: number
  singleRowHeight: number
}

const getSizingData = (el: HTMLElement): SizingData | null => {
  const style = window?.getComputedStyle(el)

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
    sizingStyle,
    paddingSize,
    borderSize,
    singleRowHeight,
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
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0",
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

export default useAutosize
