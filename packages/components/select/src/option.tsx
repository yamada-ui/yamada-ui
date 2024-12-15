import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { FC, ReactElement } from "react"
import type { UseSelectOptionProps } from "./use-select-option"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useSelectContext } from "./use-select"
import { useSelectOption } from "./use-select-option"

interface OptionOptions {
  /**
   * The select option icon to use.
   */
  icon?: null | ReactElement
}

export interface OptionProps extends UseSelectOptionProps, OptionOptions {}

export const Option = forwardRef<OptionProps, "div">(
  ({ className, icon, ...rest }, ref) => {
    const { styles } = useSelectContext()
    const { children, customIcon, selected, getOptionProps } =
      useSelectOption(rest)

    icon ??= customIcon

    const css: CSSUIObject = {
      alignItems: "center",
      color: "inherit",
      display: "flex",
      flex: "0 0 auto",
      gap: "0.75rem",
      outline: 0,
      textAlign: "start",
      textDecoration: "none",
      userSelect: "none",
      width: "100%",
      ...styles.item,
    }

    return (
      <ui.div
        className={cx("ui-select__item", className)}
        __css={css}
        {...getOptionProps({}, ref)}
      >
        {icon !== null ? (
          <OptionIcon opacity={selected ? 1 : 0}>
            {icon || <CheckIcon />}
          </OptionIcon>
        ) : null}

        <ui.span style={{ flex: 1 }} data-label>
          {children}
        </ui.span>
      </ui.div>
    )
  },
)

Option.displayName = "Option"
Option.__ui__ = "Option"

interface OptionIconProps extends HTMLUIProps<"span"> {}

const OptionIcon = forwardRef<OptionIconProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles } = useSelectContext()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "inline-flex",
      flexShrink: 0,
      fontSize: "0.85em",
      justifyContent: "center",
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
  <svg height="1em" viewBox="0 0 14 14" width="1em">
    <polygon
      fill="currentColor"
      points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    />
  </svg>
)
