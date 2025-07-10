import type { HTMLUIProps } from "../../core"
import type { UseSelectOptionGroupProps } from "./use-select-option-group"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { useSelectContext } from "./use-select"
import { useSelectOptionGroup } from "./use-select-option-group"

interface OptionGroupOptions extends UseSelectOptionGroupProps {}

export interface OptionGroupProps extends HTMLUIProps, OptionGroupOptions {
  /**
   * Props for option group element.
   */
  labelProps?: HTMLUIProps<"header">
}

export const OptionGroup = forwardRef<OptionGroupProps, "div">(
  (
    {
      className,
      children,
      color,
      h,
      height = h,
      minH,
      minHeight = minH,
      labelProps,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useSelectContext()
    const { label, getContainerProps, getGroupProps, getLabelProps } =
      useSelectOptionGroup(rest)

    return (
      <ui.section
        className={cx("ui-select__item", "ui-select__item--group", className)}
        __css={{ color, h: "fit-content", w: "100%" }}
        {...getContainerProps()}
      >
        <ui.header
          className="ui-select__item__group-label"
          lineClamp={1}
          __css={styles.groupLabel}
          {...getLabelProps(labelProps)}
        >
          {label}
        </ui.header>

        <ui.div
          {...getGroupProps({}, ref)}
          className="ui-select__item__group"
          height={height}
          minHeight={minHeight}
          __css={styles.group}
        >
          {children}
        </ui.div>
      </ui.section>
    )
  },
)

OptionGroup.displayName = "OptionGroup"
OptionGroup.__ui__ = "OptionGroup"
