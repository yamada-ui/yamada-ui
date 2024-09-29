import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useId } from "react"
import type { ReactElement, FC } from "react"
import type { UseSelectOptionProps } from "./use-select"
import { useSelectContext, useSelectOption } from "./use-select"

interface OptionOptions {
  icon?: ReactElement
}

export interface OptionProps extends UseSelectOptionProps, OptionOptions {}

export const Option = forwardRef<OptionProps, "li">(
  ({ id, className, icon, ...rest }, ref) => {
    const { styles } = useSelectContext()
    const { isSelected, customIcon, children, getOptionProps } =
      useSelectOption(rest)
    const uuid = useId()

    id ??= uuid
    icon ??= customIcon

    const css: CSSUIObject = {
      textDecoration: "none",
      color: "inherit",
      userSelect: "none",
      display: "flex",
      width: "100%",
      alignItems: "center",
      textAlign: "start",
      flex: "0 0 auto",
      outline: 0,
      gap: "0.75rem",
      ...styles.item,
    }

    return (
      <ui.li
        id={id}
        className={cx("ui-select__item", className)}
        __css={css}
        {...getOptionProps({}, ref)}
      >
        {icon !== null ? (
          <OptionIcon opacity={isSelected ? 1 : 0}>
            {icon || <CheckIcon />}
          </OptionIcon>
        ) : null}

        <ui.span style={{ flex: 1 }} data-label>
          {children}
        </ui.span>
      </ui.li>
    )
  },
)

Option.displayName = "Option"
Option.__ui__ = "Option"

type OptionIconProps = HTMLUIProps<"span">

const OptionIcon = forwardRef<OptionIconProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles } = useSelectContext()

    const css: CSSUIObject = {
      flexShrink: 0,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "0.85em",
      ...styles.itemIcon,
    }

    return (
      <ui.span
        ref={ref}
        className={cx("ui-select__item__icon", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

OptionIcon.displayName = "OptionIcon"
OptionIcon.__ui__ = "OptionIcon"

const CheckIcon: FC = () => (
  <svg viewBox="0 0 14 14" width="1em" height="1em">
    <polygon
      fill="currentColor"
      points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    />
  </svg>
)
