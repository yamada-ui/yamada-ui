import type { FC, HTMLUIProps } from "../../core"
import { ui } from "../../core"
import { cx } from "../../utils"
import { useInputGroup } from "./input-context"

interface InputAddonOptions {
  /**
   * The placement of the element.
   *
   * @default 'left'
   */
  placement?: "left" | "right"
}

export interface InputAddonProps extends HTMLUIProps, InputAddonOptions {}

const InputAddon: FC<InputAddonProps> = ({
  className,
  placement = "left",
  ...rest
}) => {
  const { styles } = useInputGroup()

  const placementStyles = {
    left: {
      me: "-1px",
      roundedRight: "0px !important",
    },
    right: {
      ms: "-1px",
      roundedLeft: "0px !important",
    },
  }

  return (
    <ui.div
      className={cx("ui-input__addon", className)}
      __css={{
        ...styles.addon,
        ...placementStyles[placement],
      }}
      {...rest}
    />
  )
}

InputAddon.__ui__ = "InputAddon"

export const InputLeftAddon: FC<InputAddonProps> = ({ className, ...rest }) => {
  return (
    <InputAddon
      className={cx("ui-input__addon--left", className)}
      placement="left"
      {...rest}
    />
  )
}

InputLeftAddon.__ui__ = "InputLeftAddon"

export const InputRightAddon: FC<InputAddonProps> = ({
  className,
  ...rest
}) => {
  return (
    <InputAddon
      className={cx("ui-input__addon--right", className)}
      placement="right"
      {...rest}
    />
  )
}

InputRightAddon.__ui__ = "InputRightAddon"
