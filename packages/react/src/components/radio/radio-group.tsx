"use client"

import type { ReactElement, ReactNode } from "react"
import type {
  GenericsComponent,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { GroupProps } from "../group"
import type { UseInputBorderProps } from "../input"
import type { RadioProps } from "./radio"
import type { RadioStyle } from "./radio.style"
import type { UseRadioGroupProps } from "./use-radio-group"
import { useMemo } from "react"
import { Group } from "../group"
import {
  component,
  Radio,
  RadioPropsContext,
  useRootComponentProps,
} from "./radio"
import { RadioGroupContext, useRadioGroup } from "./use-radio-group"

export interface RadioItem<Y extends string = string> extends RadioProps<Y> {
  label: ReactNode
}

export interface RadioGroupRootProps<Y extends string = string>
  extends Omit<
      WithoutThemeProps<GroupProps, RadioStyle>,
      "defaultValue" | "onChange" | "value"
    >,
    ThemeProps<RadioStyle>,
    UseRadioGroupProps<Y>,
    UseInputBorderProps {
  /**
   * If provided, generate options based on items.
   *
   * @default '[]'
   */
  items?: RadioItem<Y>[]
}

/**
 * `RadioGroup` is a component that groups `Radio` components.
 *
 * @see https://yamada-ui.com/components/radio
 */
export const RadioGroupRoot = component<"div", RadioGroupRootProps>((props) => {
  const [
    ,
    {
      colorScheme,
      size,
      variant,
      children,
      disabled,
      errorBorderColor,
      focusBorderColor,
      invalid,
      items = [],
      readOnly,
      shape,
      ...rest
    },
  ] = useRootComponentProps(props, "group", {
    transferProps: ["variant", "colorScheme", "size", "shape"],
  })
  const { name, value, getInputProps, getLabelProps, getRootProps, onChange } =
    useRadioGroup(rest)
  const computedChildren = useMemo(() => {
    if (children) return children

    return items.map(({ label, value, ...rest }, index) => (
      <Radio key={value ?? index} value={value} {...rest}>
        {label}
      </Radio>
    ))
  }, [items, children])
  const context = useMemo(
    () => ({
      colorScheme,
      size,
      variant,
      disabled,
      errorBorderColor,
      focusBorderColor,
      invalid,
      readOnly,
      shape,
    }),
    [
      variant,
      size,
      colorScheme,
      shape,
      disabled,
      invalid,
      readOnly,
      errorBorderColor,
      focusBorderColor,
    ],
  )
  const groupContext = useMemo(
    () => ({ name, value, getInputProps, getLabelProps, onChange }),
    [name, value, getInputProps, getLabelProps, onChange],
  )

  return (
    <RadioPropsContext value={context}>
      <RadioGroupContext value={groupContext}>
        <Group orientation="vertical" {...getRootProps()}>
          {computedChildren}
        </Group>
      </RadioGroupContext>
    </RadioPropsContext>
  )
}, "group")() as GenericsComponent<{
  <Y extends string = string>(props: RadioGroupRootProps<Y>): ReactElement
}>
