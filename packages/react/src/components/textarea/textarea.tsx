import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { UseInputBorderProps } from "../input"
import type { TextareaStyle } from "./textarea.style"
import type { UseTextareaProps } from "./use-textarea"
import { createComponent } from "../../core"
import { useFieldProps } from "../field"
import { useInputBorder } from "../input"
import { textareaStyle } from "./textarea.style"
import { useTextarea } from "./use-textarea"

export interface TextareaProps
  extends HTMLStyledProps<"textarea">,
    ThemeProps<TextareaStyle>,
    UseInputBorderProps,
    FieldProps,
    UseTextareaProps {}

export const {
  PropsContext: TextareaPropsContext,
  usePropsContext: useTextareaPropsContext,
  withContext,
} = createComponent<TextareaProps, TextareaStyle>("textarea", textareaStyle)

/**
 * `Textarea` is a component used to obtain multi-line text input.
 *
 * @see https://yamada-ui.com/components/textarea
 */
export const Textarea = withContext("textarea")({ rows: 2 }, (props) => {
  const {
    props: { errorBorderColor, focusBorderColor, vars: varsProp, ...rest },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const { getTextareaProps } = useTextarea(rest)
  const vars = useInputBorder(varsProp, {
    errorBorderColor,
    focusBorderColor,
  })

  return {
    vars,
    ...ariaProps,
    ...dataProps,
    ...eventProps,
    ...getTextareaProps(),
  }
})
