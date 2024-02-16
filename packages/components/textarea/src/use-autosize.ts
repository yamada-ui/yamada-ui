import { pickObject } from "@yamada-ui/utils"
import type { RefObject } from "react"
import { useRef } from "react"

const useAutosize = (
  libRef: RefObject<HTMLTextAreaElement>,
  maxRows: number,
  minRows: number,
) => {
  const heightRef = useRef(0)

  const resizeTextarea = () => {
    const el = libRef.current

    if (!el) return

    const nodeSizeData = getSizingData(el)

    if (!nodeSizeData) return

    let { value, placeholder, style } = el

    value ??= placeholder ?? "x"

    const height = calcHeight(nodeSizeData, value, maxRows, minRows)

    if (heightRef.current !== height) {
      heightRef.current = height

      style.height = `${height}px`
    }
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

type SizingStyle = Pick<CSSStyleDeclaration, SizingProps>

type SizingData = {
  sizingStyle: SizingStyle
  paddingSize: number
  borderSize: number
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

  return {
    sizingStyle,
    paddingSize,
    borderSize,
  }
}

let hiddenTextarea: HTMLTextAreaElement | null = null

const calcHeight = (
  sizingData: SizingData,
  value: string,
  maxRows: number,
  minRows: number,
) => {
  const getHeight = (el: HTMLElement, sizingData: SizingData): number => {
    const height = el.scrollHeight

    if (sizingData.sizingStyle.boxSizing === "border-box")
      return height + sizingData.borderSize

    return height - sizingData.paddingSize
  }

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea")
    hiddenTextarea.setAttribute("tabindex", "-1")
    hiddenTextarea.setAttribute("aria-hidden", "true")

    forceHiddenStyles(hiddenTextarea)
  }

  if (hiddenTextarea.parentNode === null)
    document.body.appendChild(hiddenTextarea)

  const { paddingSize, borderSize, sizingStyle } = sizingData
  const { boxSizing } = sizingStyle

  Object.keys(sizingStyle).forEach((_key) => {
    const key = _key as keyof typeof sizingStyle

    hiddenTextarea!.style[key] = sizingStyle[key] as any
  })

  forceHiddenStyles(hiddenTextarea)

  hiddenTextarea.value = value

  let height = getHeight(hiddenTextarea, sizingData)

  hiddenTextarea.value = "x"

  const rowHeight = hiddenTextarea.scrollHeight - paddingSize

  let minHeight = rowHeight * minRows

  if (boxSizing === "border-box")
    minHeight = minHeight + paddingSize + borderSize

  height = Math.max(minHeight, height)

  let maxHeight = rowHeight * maxRows

  if (boxSizing === "border-box")
    maxHeight = maxHeight + paddingSize + borderSize

  height = Math.min(maxHeight, height)

  return height
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
