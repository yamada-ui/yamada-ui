import type { HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { UseSelectOptionGroupProps } from "./use-select"
import { useSelectContext, useSelectOptionGroup } from "./use-select"

type OptionGroupOptions = UseSelectOptionGroupProps

export type OptionGroupProps = HTMLUIProps<"ul"> & OptionGroupOptions

export const OptionGroup = forwardRef<OptionGroupProps, "ul">(
  (
    { className, color, h, height, minH, minHeight, children, ...rest },
    ref,
  ) => {
    const { styles } = useSelectContext()
    const { label, getContainerProps, getGroupProps } =
      useSelectOptionGroup(rest)

    h = h ?? height
    minH = minH ?? minHeight

    return (
      <ui.li
        className={cx("ui-select__item", "ui-select__item--group", className)}
        __css={{ w: "100%", h: "fit-content", color }}
        {...getContainerProps()}
      >
        <ui.span
          className={cx("ui-select__item-group-label")}
          __css={styles.groupLabel}
          noOfLines={1}
        >
          {label}
        </ui.span>

        <ui.ul
          {...getGroupProps({}, ref)}
          className={cx("ui-select__item-group", className)}
          __css={{ h, minH, ...styles.group }}
        >
          {children}
        </ui.ul>
      </ui.li>
    )
  },
)
