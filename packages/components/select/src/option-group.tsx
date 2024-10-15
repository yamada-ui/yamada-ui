import type { HTMLUIProps } from "@yamada-ui/core"
import type { UseSelectOptionGroupProps } from "./use-select-option-group"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useSelectContext } from "./use-select"
import { useSelectOptionGroup } from "./use-select-option-group"

interface OptionGroupOptions extends UseSelectOptionGroupProps {}

export interface OptionGroupProps
  extends HTMLUIProps<"ul">,
    OptionGroupOptions {
  /**
   * Props for option group element.
   */
  labelProps?: HTMLUIProps<"span">
}

export const OptionGroup = forwardRef<OptionGroupProps, "ul">(
  (
    {
      className,
      children,
      color,
      h,
      height,
      minH,
      minHeight,
      labelProps,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useSelectContext()
    const { label, getContainerProps, getGroupProps } =
      useSelectOptionGroup(rest)

    h ??= height
    minH ??= minHeight

    return (
      <ui.li
        className={cx("ui-select__item", "ui-select__item--group", className)}
        __css={{ color, h: "fit-content", w: "100%" }}
        {...getContainerProps()}
      >
        <ui.span
          className="ui-select__item__group-label"
          lineClamp={1}
          __css={styles.groupLabel}
          {...labelProps}
        >
          {label}
        </ui.span>

        <ui.ul
          {...getGroupProps({}, ref)}
          className="ui-select__item__group"
          __css={{ h, minH, ...styles.group }}
        >
          {children}
        </ui.ul>
      </ui.li>
    )
  },
)

OptionGroup.displayName = "OptionGroup"
OptionGroup.__ui__ = "OptionGroup"
