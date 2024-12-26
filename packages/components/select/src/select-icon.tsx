import type {
  CSSUIObject,
  FunctionComponent,
  HTMLUIProps,
} from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { ChevronIcon, CloseIcon } from "@yamada-ui/icon"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx, getValidChildren, isValidElement } from "@yamada-ui/utils"
import { cloneElement, useRef } from "react"
import { useSelectContext } from "./use-select"

export interface SelectIconProps extends HTMLUIProps {}

export const SelectIcon = forwardRef<SelectIconProps, "div">(
  ({ className, children, __css, ...rest }, ref) => {
    const { styles } = useSelectContext()

    const css: CSSUIObject = {
      alignItems: "center",
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "center",
      pointerEvents: "none",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      ...styles.icon,
      ...__css,
    }

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
        __css={css}
        {...rest}
      >
        {isValidElement(children) ? cloneChildren : <ChevronIcon />}
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
      {children ?? <CloseIcon h="0.5em" w="0.5em" />}
    </SelectIcon>
  )
}

SelectClearIcon.displayName = "SelectClearIcon"
SelectClearIcon.__ui__ = "SelectClearIcon"
