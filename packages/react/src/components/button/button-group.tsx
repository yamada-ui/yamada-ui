"use client"

import type { Component, ThemeProps, WithoutThemeProps } from "../../core"
import type { GroupProps } from "../group"
import type { ButtonProps } from "./button"
import type { ButtonStyle } from "./button.style"
import { useMemo } from "react"
import { Group } from "../group"
import { ButtonPropsContext } from "./button"
import { IconButtonPropsContext } from "./icon-button"

export interface ButtonGroupRootProps
  extends WithoutThemeProps<GroupProps, ButtonStyle>, ThemeProps<ButtonStyle> {
  /**
   * If `true`, all wrapped button will be disabled.
   *
   * @default false
   */
  disabled?: boolean
}

/**
 * `Button` is an interactive component that allows users to perform actions such as submitting forms and toggling modals.
 *
 * @see https://yamada-ui.com/docs/components/button
 */
export const ButtonGroupRoot = (({
  size,
  variant,
  attached,
  disabled,
  ...rest
}: ButtonGroupRootProps) => {
  const context = useMemo<ButtonProps>(
    () => ({
      size,
      variant,
      disabled,
      focusVisibleRing: attached ? "inside" : undefined,
    }),
    [size, variant, disabled, attached],
  )

  return (
    <ButtonPropsContext value={context}>
      <IconButtonPropsContext value={context}>
        <Group attached={attached} {...rest} />
      </IconButtonPropsContext>
    </ButtonPropsContext>
  )
}) as Component<"div", ButtonGroupRootProps>
