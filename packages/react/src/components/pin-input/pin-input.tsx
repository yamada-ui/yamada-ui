import type { Ref } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { InputProps } from "../input"
import type { PinInputStyle } from "./pin-input.style"
import type { UsePinInputProps } from "./use-pin-input"
import { createSlotComponent, styled } from "../../core"
import { getValidChildren, mergeRefs } from "../../utils"
import { useFieldProps } from "../field"
import { Input } from "../input"
import { pinInputStyle } from "./pin-input.style"
import { DescendantsContext, useDescendant, usePinInput } from "./use-pin-input"

interface PinInputContext {
  getInputProps: (
    props: PinInputFieldProps & {
      index: number
      ref?: Ref<HTMLInputElement>
    },
  ) => PinInputFieldProps
}

export interface PinInputRootProps
  extends Omit<HTMLStyledProps, "defaultValue" | "mask" | "onChange">,
    ThemeProps<PinInputStyle>,
    UsePinInputProps {
  /**
   * The number of inputs to display.
   *
   * @default 4
   */
  items?: number
}

export const {
  ComponentContext: PinInputComponentContext,
  PropsContext: PinInputPropsContext,
  useComponentContext: usePinInputComponentContext,
  usePropsContext: usePinInputPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<PinInputRootProps, PinInputStyle, PinInputContext>(
  "pin-input",
  pinInputStyle,
)

/**
 * `PinInput` is a component used to capture pin codes or OTP (One-Time Password) inputs.
 *
 * @see https://yamada-ui.com/components/pin-input
 */
export const PinInputRoot = withProvider<"div", PinInputRootProps>(
  ({ ref, children, items = 4, ...props }) => {
    const { descendants, getInputProps, getRootProps } = usePinInput(props)

    let cloneChildren = getValidChildren(children)

    if (!cloneChildren.length)
      for (let i = 0; i < items; i++) {
        cloneChildren.push(<PinInputField key={i} />)
      }

    return (
      <DescendantsContext value={descendants}>
        <PinInputComponentContext value={{ getInputProps }}>
          <styled.div {...getRootProps({ ref })}>{cloneChildren}</styled.div>
        </PinInputComponentContext>
      </DescendantsContext>
    )
  },
  "root",
)()

export interface PinInputFieldProps extends InputProps {}

export const PinInputField = withContext<"input", PinInputFieldProps>(
  ({ ref, ...props }) => {
    const { getInputProps } = usePinInputComponentContext()
    const { index, register } = useDescendant()

    const {
      props: rest,
      ariaProps,
      dataProps,
      eventProps,
    } = useFieldProps(props)

    return (
      <Input
        {...getInputProps({
          ...ariaProps,
          ...dataProps,
          ...eventProps,
          ...rest,
          ref: mergeRefs(register, ref),
          index,
        })}
      />
    )
  },
  "field",
)()
