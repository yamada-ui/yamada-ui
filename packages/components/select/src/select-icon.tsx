import type {
  CSSUIObject,
  FunctionComponent,
  HTMLUIProps,
} from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { ChevronIcon, CloseIcon } from "@yamada-ui/icon"
import { useClickable } from "@yamada-ui/use-clickable"
import { cx, getValidChildren, isValidElement } from "@yamada-ui/utils"
import type { HTMLAttributes } from "react"
import { cloneElement, useRef } from "react"
import { useSelectContext } from "./use-select"

export interface SelectIconProps extends HTMLUIProps {}

export const SelectIcon = forwardRef<SelectIconProps, "div">(
  ({ className, children, __css, ...rest }, ref) => {
    const { styles } = useSelectContext()

    const css: CSSUIObject = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      cursor: "pointer",
      ...styles.icon,
      ...__css,
    }

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        focusable: false,
        "aria-hidden": true,
        style: {
          maxWidth: "1em",
          maxHeight: "1em",
          color: "currentColor",
        },
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

  const isDisabled = props.disabled

  const rest = useClickable({
    ref,
    isDisabled,
    ...(props as HTMLAttributes<HTMLElement>),
  })

  return (
    <SelectIcon
      aria-label="Clear value"
      className={cx("ui-select__clear-icon", className)}
      __css={styles.clearIcon}
      {...rest}
    >
      {children ?? <CloseIcon w="0.5em" h="0.5em" />}
    </SelectIcon>
  )
}

SelectClearIcon.displayName = "SelectClearIcon"
SelectClearIcon.__ui__ = "SelectClearIcon"
