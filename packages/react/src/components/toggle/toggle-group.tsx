"use client"

import type { ReactElement } from "react"
import type {
  GenericsComponent,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { GroupProps } from "../group"
import type { ToggleProps } from "./toggle"
import type { ToggleStyle } from "./toggle.style"
import type { UseToggleGroupProps } from "./use-toggle-group"
import { useMemo } from "react"
import { Group } from "../group"
import { component, TogglePropsContext, useRootComponentProps } from "./toggle"
import { ToggleGroupContext, useToggleGroup } from "./use-toggle-group"

/**
 * `ToggleGroup` is a set of two-state buttons that can be toggled on or off.
 *
 * @see https://yamada-ui.com/docs/components/toggle
 */
export interface ToggleGroupRootProps<Y extends string | string[] = string>
  extends
    Omit<
      WithoutThemeProps<GroupProps, ToggleStyle>,
      "defaultValue" | "onChange" | "value"
    >,
    UseToggleGroupProps<Y>,
    ThemeProps<ToggleStyle> {}

export const ToggleGroupRoot = component<"div", ToggleGroupRootProps>(
  (props: ToggleGroupRootProps) => {
    const [, { colorScheme, size, variant, attached, ...rest }] =
      useRootComponentProps(props, "group", {
        transferProps: ["size", "variant", "colorScheme"],
      })
    const {
      disabled,
      readOnly,
      value,
      getGroupProps,
      onChange,
      onChangeMapRef,
    } = useToggleGroup(rest)
    const context = useMemo<ToggleProps>(
      () => ({
        colorScheme,
        size,
        variant,
        focusVisibleRing: attached ? "inside" : undefined,
      }),
      [variant, size, colorScheme, attached],
    )
    const groupContext = useMemo(
      () => ({
        disabled,
        readOnly,
        value,
        onChange,
        onChangeMapRef,
      }),
      [value, disabled, readOnly, onChange, onChangeMapRef],
    )

    return (
      <TogglePropsContext value={context}>
        <ToggleGroupContext value={groupContext}>
          <Group attached={attached} {...getGroupProps()} />
        </ToggleGroupContext>
      </TogglePropsContext>
    )
  },
  "group",
)() as GenericsComponent<{
  <Y extends string | string[] = string>(
    props: ToggleGroupRootProps<Y>,
  ): ReactElement
}>
