import type { ForwardedRef } from "react"
import type { FormControlOptions } from "../../components/form-control"
import type {
  ColorModeToken,
  CSS,
  CSSUIObject,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "../../core"
import { useRef } from "react"
import { useFormControlProps } from "../../components/form-control"
import { omitThemeProps, ui, useComponentStyle } from "../../core"
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
} from "../../utils"
import useAutosize from "./use-autosize"

interface TextareaOptions {
  /**
   * If `true`, the Textarea height auto-adjusts to text height.
   */
  autosize?: boolean
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
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
  extends Omit<HTMLUIProps<"textarea">, "disabled" | "readOnly" | "required">,
    ThemeProps<"Textarea">,
    TextareaOptions,
    FormControlOptions {}

/**
 * `Textarea` is a component used to obtain multi-line text input.
 *
 * @see Docs https://yamada-ui.com/components/forms/textarea
 */
export const Textarea: FC<TextareaProps> = ({ ref, ...props }) => {
  const [
    { h, height, maxH, maxHeight, minH, minHeight, ...styles },
    mergedProps,
  ] = useComponentStyle("Textarea", props)
  const computedProps = omitThemeProps(mergedProps)
  const {
    className,
    autosize,
    maxRows = Infinity,
    minRows = 1,
    resize = "none",
    resizeRef,
    rows,
    onChange,
    ...rest
  } = useFormControlProps(computedProps)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const value = textareaRef.current?.value ?? ""
  const resizeTextarea = useAutosize(textareaRef, maxRows, minRows)

  let css: CSSUIObject

  if (rows || autosize) {
    css = styles
  } else {
    css = { h, height, maxH, maxHeight, minH, minHeight, ...styles }
  }

  useSafeLayoutEffect(() => {
    if (!createdDom() || !autosize) return

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
      resize={resize}
      rows={rows}
      onChange={handlerAll(autosize ? resizeTextarea : noop, onChange)}
      __css={css}
      {...rest}
    />
  )
}

Textarea.__ui__ = "Textarea"
