"use client"

import type { ReactElement, ReactNode } from "react"
import type {
  GenericsComponent,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { GroupProps } from "../group"
import type { CheckboxStyle } from "./checkbox.style"
import type { UseCheckboxProps } from "./use-checkbox"
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

export interface CheckboxItem<Y extends string = string>
  extends UseCheckboxProps<Y> {
  label: ReactNode
}

export interface CheckboxGroupRootProps<Y extends string = string>
  extends Omit<
      WithoutThemeProps<GroupProps, CheckboxStyle>,
      "defaultValue" | "onChange" | "value"
    >,
    ThemeProps<CheckboxStyle>,
    UseCheckboxGroupProps<Y> {
  /**
   * If provided, generate options based on items.
   *
   * @default '[]'
   */
  items?: CheckboxItem<Y>[]
}

/**
 * `CheckboxGroup` is a component that groups `Checkbox` components.
 *
 * @see https://yamada-ui.com/components/checkbox
 */
export const CheckboxGroupRoot = component<"div", CheckboxGroupRootProps>(
  (props) => {
    const [
      ,
      {
        colorScheme,
        size,
        variant,
        children,
        disabled,
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
        disabled,
        invalid,
        readOnly,
        shape,
      }),
      [variant, size, colorScheme, shape, disabled, invalid, readOnly],
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
