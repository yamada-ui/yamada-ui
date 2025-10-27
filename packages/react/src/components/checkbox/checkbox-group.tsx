"use client"

import type { ReactElement, ReactNode } from "react"
import type {
  GenericsComponent,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { GroupProps } from "../group"
import type { UseInputBorderProps } from "../input"
import type { CheckboxProps } from "./checkbox"
import type { CheckboxStyle } from "./checkbox.style"
import type { UseCheckboxGroupProps } from "./use-checkbox-group"
import { useMemo } from "react"
import { Group } from "../group"
import {
  Checkbox,
  CheckboxPropsContext,
  component,
  useRootComponentProps,
} from "./checkbox"
import { CheckboxGroupContext, useCheckboxGroup } from "./use-checkbox-group"

export interface CheckboxGroupItem<Y extends string = string>
  extends CheckboxProps<Y> {
  label: ReactNode
}

export interface CheckboxGroupRootProps<Y extends string = string>
  extends Omit<
      WithoutThemeProps<GroupProps, CheckboxStyle>,
      "defaultValue" | "onChange" | "value"
    >,
    ThemeProps<CheckboxStyle>,
    UseCheckboxGroupProps<Y>,
    UseInputBorderProps,
    Pick<CheckboxProps, "checkedIcon"> {
  /**
   * If provided, generate options based on items.
   *
   * @default []
   */
  items?: CheckboxGroupItem<Y>[]
}

/**
 * `CheckboxGroup` is a component that groups `Checkbox` components.
 *
 * @see https://yamada-ui.com/docs/components/checkbox
 */
export const CheckboxGroupRoot = component<"div", CheckboxGroupRootProps>(
  (props) => {
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
        readOnly,
        shape,
        ...rest
      },
    ] = useRootComponentProps(props, "group", {
      transferProps: ["variant", "colorScheme", "size", "shape"],
    })
    const { max, value, getInputProps, getLabelProps, getRootProps, onChange } =
      useCheckboxGroup(rest)
    const computedChildren = useMemo(() => {
      if (children) return children

      return items.map(({ label, value, ...rest }, index) => (
        <Checkbox key={value ?? index} value={value} {...rest}>
          {label}
        </Checkbox>
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
        checkedIcon,
      ],
    )
    const groupContext = useMemo(
      () => ({ max, value, getInputProps, getLabelProps, onChange }),
      [max, value, getInputProps, getLabelProps, onChange],
    )

    return (
      <CheckboxPropsContext value={context}>
        <CheckboxGroupContext value={groupContext}>
          <Group orientation="vertical" {...getRootProps()}>
            {computedChildren}
          </Group>
        </CheckboxGroupContext>
      </CheckboxPropsContext>
    )
  },
  "group",
)() as GenericsComponent<{
  <Y extends string = string>(props: CheckboxGroupRootProps<Y>): ReactElement
}>

export { Checkbox as CheckboxGroupItem }
