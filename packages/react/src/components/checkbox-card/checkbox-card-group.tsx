"use client"

import type { ReactElement } from "react"
import type {
  GenericsComponent,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { UseCheckboxGroupProps } from "../checkbox"
import type { GroupProps } from "../group"
import type { UseInputBorderProps } from "../input"
import type { CheckboxCardRootProps } from "./checkbox-card"
import type { CheckboxCardStyle } from "./checkbox-card.style"
import { useMemo } from "react"
import { CheckboxGroupContext, useCheckboxGroup } from "../checkbox"
import { Group } from "../group"
import {
  CheckboxCardPropsContext,
  CheckboxCardRoot,
  component,
  useRootComponentProps,
} from "./checkbox-card"

export interface CheckboxCardGroupItem<
  Y extends string = string,
> extends CheckboxCardRootProps<Y> {}

export interface CheckboxCardGroupRootProps<Y extends string = string>
  extends
    Omit<
      WithoutThemeProps<GroupProps, CheckboxCardStyle>,
      "defaultValue" | "onChange" | "value"
    >,
    ThemeProps<CheckboxCardStyle>,
    UseCheckboxGroupProps<Y>,
    UseInputBorderProps,
    Pick<CheckboxCardRootProps, "checkedIcon" | "withIndicator"> {
  /**
   * If provided, generate options based on items.
   *
   * @default []
   */
  items?: CheckboxCardGroupItem<Y>[]
}

/**
 * `CheckboxCardGroup` is a component that groups `CheckboxCard` components.
 *
 * @see https://yamada-ui.com/docs/components/checkbox-card
 */
export const CheckboxCardGroupRoot = component<
  "div",
  CheckboxCardGroupRootProps
>((props) => {
  const [
    ,
    {
      colorScheme,
      size,
      variant,
      checkedIcon,
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
  const { max, value, getInputProps, getLabelProps, getRootProps, onChange } =
    useCheckboxGroup(rest)
  const computedChildren = useMemo(() => {
    if (children) return children

    return items.map(({ value, ...rest }, index) => (
      <CheckboxCardRoot key={value ?? index} value={value} {...rest} />
    ))
  }, [items, children])
  const context = useMemo(
    () => ({
      colorScheme,
      size,
      variant,
      checkedIcon,
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
      checkedIcon,
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
    () => ({ max, value, getInputProps, getLabelProps, onChange }),
    [max, value, getInputProps, getLabelProps, onChange],
  )

  return (
    <CheckboxCardPropsContext value={context}>
      <CheckboxGroupContext value={groupContext}>
        <Group {...getRootProps()}>{computedChildren}</Group>
      </CheckboxGroupContext>
    </CheckboxCardPropsContext>
  )
}, "group")() as GenericsComponent<{
  <Y extends string = string>(
    props: CheckboxCardGroupRootProps<Y>,
  ): ReactElement
}>

export { CheckboxCardRoot as CheckboxCardGroupItem }
