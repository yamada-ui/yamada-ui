import type { ReactElement } from "react"
import type { HTMLUIProps } from "../../core"
import type { UseSelectOptionProps } from "./use-select-option"
import { forwardRef, ui } from "../../core"
import { cx } from "../../utils"
import { CheckIcon } from "../icon"
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

    return (
      <ui.div
        className={cx("ui-select__item", className)}
        __css={styles.item}
        {...getOptionProps({}, ref)}
      >
        {icon !== null ? (
          <OptionIcon opacity={selected ? 1 : 0}>
            {icon || <CheckIcon boxSize="5" />}
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

    return (
      <ui.span
        ref={ref}
        className={cx("ui-select__item__icon", className)}
        __css={styles.itemIcon}
        {...rest}
      />
    )
  },
)

OptionIcon.displayName = "OptionIcon"
OptionIcon.__ui__ = "OptionIcon"
