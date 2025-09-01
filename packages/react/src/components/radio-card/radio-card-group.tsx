"use client"

import type { ReactElement } from "react"
import type {
  GenericsComponent,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { GroupProps } from "../group"
import type { UseInputBorderProps } from "../input"
import type { UseRadioGroupProps } from "../radio"
import type { RadioCardRootProps } from "./radio-card"
import type { RadioCardStyle } from "./radio-card.style"
import { useMemo } from "react"
import { Group } from "../group"
import { RadioGroupContext, useRadioGroup } from "../radio"
import {
  component,
  RadioCardPropsContext,
  RadioCardRoot,
  useRootComponentProps,
} from "./radio-card"

export interface RadioCardItem<Y extends string = string>
  extends RadioCardRootProps<Y> {}

export interface RadioCardGroupRootProps<Y extends string = string>
  extends Omit<
      WithoutThemeProps<GroupProps, RadioCardStyle>,
      "defaultValue" | "onChange" | "value"
    >,
    ThemeProps<RadioCardStyle>,
    UseRadioGroupProps<Y>,
    UseInputBorderProps,
    Pick<RadioCardRootProps, "withIndicator"> {
  /**
   * If provided, generate options based on items.
   *
   * @default []
   */
  items?: RadioCardItem<Y>[]
}

/**
 * `RadioCardGroup` is a component that groups `RadioCard` components.
 *
 * @see https://yamada-ui.com/components/radio-card
 */
export const RadioCardGroupRoot = component<"div", RadioCardGroupRootProps>(
  (props) => {
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
        justify,
        readOnly,
        shape,
        withIndicator,
        ...rest
      },
    ] = useRootComponentProps(props, "group", {
      transferProps: [
        "variant",
        "colorScheme",
        "size",
        "shape",
        "justify",
        "withIndicator",
      ],
    })
    const {
      name,
      value,
      getInputProps,
      getLabelProps,
      getRootProps,
      onChange,
    } = useRadioGroup(rest)
    const computedChildren = useMemo(() => {
      if (children) return children

      return items.map(({ value, ...rest }, index) => (
        <RadioCardRoot key={value ?? index} value={value} {...rest} />
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
        justify,
        readOnly,
        shape,
        withIndicator,
      }),
      [
        colorScheme,
        size,
        variant,
        disabled,
        justify,
        withIndicator,
        errorBorderColor,
        focusBorderColor,
        invalid,
        readOnly,
        shape,
      ],
    )
    const groupContext = useMemo(
      () => ({ name, value, getInputProps, getLabelProps, onChange }),
      [name, value, getInputProps, getLabelProps, onChange],
    )

    return (
      <RadioCardPropsContext value={context}>
        <RadioGroupContext value={groupContext}>
          <Group {...getRootProps()}>{computedChildren}</Group>
        </RadioGroupContext>
      </RadioCardPropsContext>
    )
  },
  "group",
)() as GenericsComponent<{
  <Y extends string = string>(props: RadioCardGroupRootProps<Y>): ReactElement
}>
