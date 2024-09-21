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
  assignRef,
  createdDom,
  cx,
  handlerAll,
  mergeRefs,
  noop,
  useSafeLayoutEffect,
  useUpdateEffect,
} from "@yamada-ui/utils"
import type { ForwardedRef } from "react"
import { useRef } from "react"
import useAutosize from "./use-autosize"

interface TextareaOptions {
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
  /**
   * Ref to a resize function.
   */
  resizeRef?: ForwardedRef<() => void>
}

export interface TextareaProps
  extends Omit<HTMLUIProps<"textarea">, "disabled" | "required" | "readOnly">,
    ThemeProps<"Textarea">,
    TextareaOptions,
    FormControlOptions {}

/**
 * `Textarea` is a component used to obtain multi-line text input.
 *
 * @see Docs https://yamada-ui.com/components/forms/textarea
 */
export const Textarea = forwardRef<TextareaProps, "textarea">((props, ref) => {
  const [
    { h, height, minH, minHeight, maxH, maxHeight, ...styles },
    mergedProps,
  ] = useComponentStyle("Textarea", props)
  let {
    className,
    rows,
    resize = "none",
    autosize,
    maxRows = Infinity,
    minRows = 1,
    resizeRef,
    onChange,
    ...rest
  } = omitThemeProps(mergedProps)
  rest = useFormControlProps(rest)

  const isBrowser = createdDom()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const value = textareaRef.current?.value ?? ""
  const resizeTextarea = useAutosize(textareaRef, maxRows, minRows)

  let css: CSSUIObject

  if (rows || autosize) {
    css = styles
  } else {
    css = { h, height, minH, minHeight, maxH, maxHeight, ...styles }
  }

  useSafeLayoutEffect(() => {
    if (!isBrowser || !autosize) return

    resizeTextarea()

    const unsubscribeResize = addDomEvent(window, "resize", resizeTextarea)
    const unsubscribeLoadingdone = addDomEvent(
      document.fonts,
      "loadingdone",
      resizeTextarea,
    )

    return () => {
      unsubscribeResize()
      unsubscribeLoadingdone()
    }
  }, [])

  useUpdateEffect(() => {
    if (!autosize) return
    resizeTextarea()
  }, [value])

  assignRef(resizeRef, resizeTextarea)

  return (
    <ui.textarea
      ref={mergeRefs(ref, textareaRef)}
      className={cx("ui-textarea", className)}
      __css={css}
      resize={resize}
      rows={rows}
      onChange={handlerAll(autosize ? resizeTextarea : noop, onChange)}
      {...rest}
    />
  )
})
