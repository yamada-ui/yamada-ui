import type { FunctionComponent, HTMLUIProps } from "../../core"
import { cloneElement, useRef } from "react"
import { forwardRef, ui } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import { cx, getValidChildren, isValidElement } from "../../utils"
import { ChevronDownIcon, XIcon } from "../icon"
import { useSelectContext } from "./use-select"

export interface SelectIconProps extends HTMLUIProps {}

export const SelectIcon = forwardRef<SelectIconProps, "div">(
  ({ className, children, __css, ...rest }, ref) => {
    const { styles } = useSelectContext()

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        style: {
          color: "currentColor",
          maxHeight: "1em",
          maxWidth: "1em",
        },
        "aria-hidden": true,
        focusable: false,
      }),
    )

    return (
      <ui.div
        ref={ref}
        className={cx("ui-select__icon", className)}
        __css={{
          ...styles.icon,
          ...__css,
        }}
        {...rest}
      >
        {isValidElement(children) ? cloneChildren : <ChevronDownIcon />}
      </ui.div>
    )
  },
)

SelectIcon.displayName = "SelectIcon"
SelectIcon.__ui__ = "SelectIcon"

export interface SelectClearIconProps extends SelectIconProps {
  disabled?: boolean
}

export const SelectClearIcon: FunctionComponent<SelectClearIconProps> = ({
  className,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { styles } = useSelectContext()

  const rest = useClickable({
    ref,
    ...props,
  })

  return (
    <SelectIcon
      className={cx("ui-select__clear-icon", className)}
      aria-label="Clear value"
      __css={styles.clearIcon}
      {...rest}
    >
      {children ?? <XIcon boxSize="4.5" />}
    </SelectIcon>
  )
}

SelectClearIcon.displayName = "SelectClearIcon"
SelectClearIcon.__ui__ = "SelectClearIcon"
