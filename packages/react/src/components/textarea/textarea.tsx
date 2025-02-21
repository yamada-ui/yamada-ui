import type { ColorModeToken, CSS, ThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { TextareaStyle } from "./textarea.style"
import type { UseTextareaProps } from "./use-textarea"
import { createComponent, ui } from "../../core"
import { useFieldProps } from "../field"
import { useInputBorder } from "../input"
import { textareaStyle } from "./textarea.style"
import { useTextarea } from "./use-textarea"

export interface TextareaProps
  extends ThemeProps<TextareaStyle>,
    FieldProps,
    UseTextareaProps {
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
}

export const {
  PropsContext: TextareaPropsContext,
  usePropsContext: useTextareaPropsContext,
  withContext,
} = createComponent<TextareaProps, TextareaStyle>("textarea", textareaStyle)

/**
 * `Textarea` is a component used to obtain multi-line text input.
 *
 * @see Docs https://yamada-ui.com/components/forms/textarea
 */
export const Textarea = withContext<"textarea", TextareaProps>(
  ({
    ref,
    css,
    autosize,
    h,
    height,
    maxH,
    maxHeight,
    maxRows,
    minH,
    minHeight,
    minRows,
    resize,
    resizeRef,
    rows,
    onChange,
    ...rest
  }) => {
    const { getRootProps } = useTextarea({
      ref,
      css,
      autosize,
      h,
      height,
      maxH,
      maxHeight,
      maxRows,
      minH,
      minHeight,
      minRows,
      resize,
      resizeRef,
      rows,
      onChange,
    })

    return <ui.textarea {...getRootProps(rest)} />
  },
)((props) => {
  const {
    props: { errorBorderColor, focusBorderColor, vars: varsProp, ...rest },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const vars = useInputBorder(varsProp, {
    errorBorderColor,
    focusBorderColor,
  })

  return {
    vars,
    ...ariaProps,
    ...dataProps,
    ...eventProps,
    ...rest,
  }
})
