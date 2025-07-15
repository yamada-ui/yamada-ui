"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { UseInputBorderProps } from "../input"
import type { TextareaStyle } from "./textarea.style"
import type { UseTextareaProps } from "./use-textarea"
import { createComponent } from "../../core"
import { useFieldProps } from "../field"
import { useInputBorder, useInputPropsContext } from "../input"
import { textareaStyle } from "./textarea.style"
import { useTextarea } from "./use-textarea"

export interface TextareaProps
  extends HTMLStyledProps<"textarea">,
    ThemeProps<TextareaStyle>,
    UseInputBorderProps,
    FieldProps,
    UseTextareaProps {}

const {
  PropsContext: TextareaPropsContext,
  usePropsContext: useTextareaPropsContext,
  withContext,
} = createComponent<TextareaProps, TextareaStyle>("textarea", textareaStyle)

export { TextareaPropsContext, useTextareaPropsContext }

/**
 * `Textarea` is a component used to obtain multi-line text input.
 *
 * @see https://yamada-ui.com/components/textarea
 */
export const Textarea = withContext("textarea")(
  (props) => {
    const context = useInputPropsContext()

    return { rows: 2, ...context, ...props }
  },
  (props) => {
    const {
      props: { errorBorderColor, focusBorderColor, ...rest },
      ariaProps,
      dataProps,
      eventProps,
    } = useFieldProps(props)
    const { getTextareaProps } = useTextarea({
      ...ariaProps,
      ...dataProps,
      ...eventProps,
      ...rest,
    })
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })

    return {
      ...varProps,
      ...getTextareaProps(),
    }
  },
)
