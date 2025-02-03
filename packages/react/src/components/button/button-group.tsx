import type { FC, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { GroupProps } from "../group"
import type { ButtonStyle } from "./button.style"
import { useMemo } from "react"
import { Group } from "../group"
import { ButtonPropsContext } from "./button"

export interface ButtonGroupProps
  extends Merge<GroupProps, ThemeProps<ButtonStyle>> {
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
  disabled,
  ...rest
}) => {
  const context = useMemo(
    () => ({ size, variant, disabled }),
    [size, variant, disabled],
  )

  return (
    <ButtonPropsContext value={context}>
      <Group {...rest} />
    </ButtonPropsContext>
  )
}

ButtonGroup.__ui__ = "ButtonGroup"
