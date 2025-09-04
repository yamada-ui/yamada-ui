"use client"

import type {
  RequiredPropGetter,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { GroupProps } from "../group"
import type { InputProps, UseInputBorderProps } from "../input"
import type { PinInputStyle } from "./pin-input.style"
import type { UsePinInputProps } from "./use-pin-input"
import { useMemo } from "react"
import { createSlotComponent } from "../../core"
import { getValidChildren, mergeRefs } from "../../utils"
import { useFieldProps } from "../field"
import { Group } from "../group"
import { Input } from "../input"
import { pinInputStyle } from "./pin-input.style"
import {
  PinInputDescendantsContext,
  usePinInput,
  usePinInputDescendant,
} from "./use-pin-input"

interface ComponentContext extends UseInputBorderProps {
  getInputProps: RequiredPropGetter<"input", { index: number }>
}

export interface PinInputRootProps
  extends Omit<
      WithoutThemeProps<GroupProps, PinInputStyle>,
      "defaultValue" | "mask" | "onChange"
    >,
    ThemeProps<PinInputStyle>,
    UseInputBorderProps,
    UsePinInputProps {
  /**
   * The number of inputs to display.
   *
   * @default 4
   */
  items?: number
}

const {
  ComponentContext,
  PropsContext: PinInputPropsContext,
  useComponentContext,
  usePropsContext: usePinInputPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<PinInputRootProps, PinInputStyle, ComponentContext>(
  "pin-input",
  pinInputStyle,
)

export { PinInputPropsContext, usePinInputPropsContext }

/**
 * `PinInput` is a component used to capture pin codes or OTP (One-Time Password) inputs.
 *
 * @see https://yamada-ui.com/docs/components/pin-input
 */
export const PinInputRoot = withProvider<"div", PinInputRootProps>(
  ({ children, errorBorderColor, focusBorderColor, items = 4, ...rest }) => {
    const { descendants, getInputProps, getRootProps } = usePinInput(rest)
    const cloneChildren = useMemo(() => {
      const validChildren = getValidChildren(children)

      if (validChildren.length) {
        return validChildren
      } else {
        return Array.from({ length: items }, (_, index) => (
          <PinInputField key={index} index={index} />
        ))
      }
    }, [children, items])
    const context = useMemo(
      () => ({ errorBorderColor, focusBorderColor, getInputProps }),
      [getInputProps, errorBorderColor, focusBorderColor],
    )

    return (
      <PinInputDescendantsContext value={descendants}>
        <ComponentContext value={context}>
          <Group {...getRootProps()}>{cloneChildren}</Group>
        </ComponentContext>
      </PinInputDescendantsContext>
    )
  },
  "root",
)()

export interface PinInputFieldProps extends InputProps {
  /**
   * The index of the pin input field.
   */
  index: number
}

export const PinInputField = withContext<"input", PinInputFieldProps>(
  Input,
  "field",
)(undefined, ({ ref, index, ...rest }) => {
  const { errorBorderColor, focusBorderColor, getInputProps } =
    useComponentContext()
  const { register } = usePinInputDescendant()
  const { props, ariaProps, dataProps, eventProps } = useFieldProps(rest)

  return {
    ...getInputProps({
      errorBorderColor,
      focusBorderColor,
      ...ariaProps,
      ...dataProps,
      ...eventProps,
      ...props,
      ref: mergeRefs(register, ref),
      index,
    }),
  }
})
