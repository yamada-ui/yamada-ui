"use client"

import type { FC } from "react"
import type { ThemeProps, WithoutThemeProps } from "../../core"
import type { GroupProps } from "../group"
import type { ButtonProps } from "./button"
import type { ButtonStyle } from "./button.style"
import { useMemo } from "react"
import { Group } from "../group"
import { ButtonPropsContext } from "./button"
import { IconButtonPropsContext } from "./icon-button"

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

export const ButtonGroup: FC<ButtonGroupProps> = ({
  size,
  variant,
  attached,
  disabled,
  ...rest
}) => {
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
}
