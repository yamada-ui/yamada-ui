"use client"

import type { Component, ThemeProps, WithoutThemeProps } from "../../core"
import type { GroupProps } from "../group"
import type { ButtonProps } from "./button"
import type { ButtonStyle } from "./button.style"
import { useMemo } from "react"
import { Group } from "../group"
import { IconButtonPropsContext } from "../icon-button"
import { ButtonPropsContext } from "./button"

export interface ButtonGroupProps
  extends WithoutThemeProps<GroupProps, ButtonStyle>,
    ThemeProps<ButtonStyle> {
  /**
   * If `true`, all wrapped button will be disabled.
   *
   * @default false
   */
  disabled?: boolean
}

export const ButtonGroup = (({
  size,
  variant,
  attached,
  disabled,
  ...rest
}: ButtonGroupProps) => {
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
}) as Component<"div", ButtonGroupProps>
