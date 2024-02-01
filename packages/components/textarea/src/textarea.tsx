import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  ColorModeToken,
  CSS,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import { useFormControlProps } from "@yamada-ui/form-control"
import {
  addDomEvent,
  createdDom,
  cx,
  omitObject,
  pickObject,
  useMergeRefs,
} from "@yamada-ui/utils"
import { useLayoutEffect, useRef } from "react"

type TextareaOptions = {
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * If `true`, the Textarea height auto-adjusts to text height.
   */
  autosize?: boolean
  /**
   * Autosize up to maxRows rows.
   *
   * @default Infinity
   */
  maxRows?: number
  /**
   * Autosize up to minRows rows.
   *
   * @default 1
   */
  minRows?: number
}

export type TextareaProps = Omit<
  HTMLUIProps<"textarea">,
  "disabled" | "required" | "readOnly"
> &
  ThemeProps<"Textarea"> &
  TextareaOptions &
  FormControlOptions

/**
 * `Textarea` is a component used to obtain multi-line text input.
 *
 * @see Docs https://yamada-ui.com/components/forms/textarea
 */
export const Textarea = forwardRef<TextareaProps, "textarea">(
  (props, customRef) => {
    const [styles, mergedProps] = useComponentStyle("Textarea", props)
    let {
      className,
      rows,
      resize = "none",
      autosize,
      maxRows = Infinity,
      minRows = 1,
      onChange,
      ...rest
    } = omitThemeProps(mergedProps)

    rest = useFormControlProps(rest)

    const css: CSSUIObject =
      rows || autosize
        ? omitObject(styles, [
            "h",
            "height",
            "minH",
            "minHeight",
            "maxH",
            "maxHeight",
          ])
        : styles

    const libRef = useRef<HTMLTextAreaElement | null>(null)
    const ref = useMergeRefs(libRef, customRef)
    const heightRef = useRef(0)

    const resizeTextarea = () => {
      const node = libRef.current!
      const nodeSizeData = getSizingData(node)
      if (!nodeSizeData) return

      const height = calcHeight(
        nodeSizeData,
        node.value || node.placeholder || "x",
        maxRows,
        minRows,
      )
      if (heightRef.current !== height) {
        heightRef.current = height
        node.style.height = `${height}px`
      }
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (autosize) resizeTextarea()
      if (onChange) onChange(event)
    }

    const isBrowser = createdDom()
    if (isBrowser && autosize) {
      useLayoutEffect(resizeTextarea)
      addDomEvent(window, "resize", resizeTextarea)
      addDomEvent(document.fonts, "loadingdone", resizeTextarea)
    }

    return (
      <ui.textarea
        ref={ref}
        className={cx("ui-textarea", className)}
        resize={resize}
        rows={rows}
        __css={css}
        {...rest}
        onChange={handleChange}
      />
    )
  },
)

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

const getSizingData = (node: HTMLElement): SizingData | null => {
  const style = window.getComputedStyle(node)

  if (style === null) return null

  const sizingStyle = pickObject(
    style,
    SIZING_STYLE as unknown as SizingProps[],
  )
  const { boxSizing } = sizingStyle

  // probably node is detached from DOM, can't read computed dimensions
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
  const getHeight = (node: HTMLElement, sizingData: SizingData): number => {
    const height = node.scrollHeight

    if (sizingData.sizingStyle.boxSizing === "border-box") {
      // border-box: add border, since height = content + padding + border
      return height + sizingData.borderSize
    }

    // remove padding, since height = content
    return height - sizingData.paddingSize
  }

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea")
    hiddenTextarea.setAttribute("tabindex", "-1")
    hiddenTextarea.setAttribute("aria-hidden", "true")
    forceHiddenStyles(hiddenTextarea)
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea)
  }

  const { paddingSize, borderSize, sizingStyle } = sizingData
  const { boxSizing } = sizingStyle

  Object.keys(sizingStyle).forEach((_key) => {
    const key = _key as keyof typeof sizingStyle
    hiddenTextarea!.style[key] = sizingStyle[key] as any
  })

  forceHiddenStyles(hiddenTextarea)

  hiddenTextarea.value = value
  let height = getHeight(hiddenTextarea, sizingData)

  // measure height of a textarea with a single row
  hiddenTextarea.value = "x"
  const rowHeight = hiddenTextarea.scrollHeight - paddingSize

  let minHeight = rowHeight * minRows
  if (boxSizing === "border-box") {
    minHeight = minHeight + paddingSize + borderSize
  }
  height = Math.max(minHeight, height)

  let maxHeight = rowHeight * maxRows
  if (boxSizing === "border-box") {
    maxHeight = maxHeight + paddingSize + borderSize
  }
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

const forceHiddenStyles = (node: HTMLElement) => {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach((key) => {
    node.style.setProperty(
      key,
      HIDDEN_TEXTAREA_STYLE[key as keyof typeof HIDDEN_TEXTAREA_STYLE],
      "important",
    )
  })
}
