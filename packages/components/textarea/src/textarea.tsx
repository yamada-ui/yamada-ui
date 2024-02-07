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
  useMergeRefs,
} from "@yamada-ui/utils"
import { useLayoutEffect, useRef } from "react"
import useAutosize from "./use-autosize"

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

    const resizeTextarea = useAutosize(libRef, maxRows, minRows)

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
