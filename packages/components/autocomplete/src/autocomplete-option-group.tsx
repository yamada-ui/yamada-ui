import type { HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useAutocompleteContext } from "./autocomplete-context"
import type { UseAutocompleteOptionGroupProps } from "./use-autocomplete-option-group"
import { useAutocompleteOptionGroup } from "./use-autocomplete-option-group"

interface AutocompleteOptionGroupOptions
  extends UseAutocompleteOptionGroupProps {
  /**
   * Props for autocomplete option group element.
   */
  labelProps?: HTMLUIProps<"span">
}

export interface AutocompleteOptionGroupProps
  extends HTMLUIProps<"ul">,
    AutocompleteOptionGroupOptions {}

export const AutocompleteOptionGroup = forwardRef<
  AutocompleteOptionGroupProps,
  "ul"
>(
  (
    {
      className,
      color,
      h,
      height,
      minH,
      minHeight,
      children,
      labelProps,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useAutocompleteContext()
    const { label, getContainerProps, getGroupProps } =
      useAutocompleteOptionGroup(rest)

    h ??= height
    minH ??= minHeight

    return (
      <ui.li
        className={cx(
          "ui-autocomplete__item",
          "ui-autocomplete__item--group",
          className,
        )}
        __css={{ w: "100%", h: "fit-content", color }}
        {...getContainerProps()}
      >
        <ui.span
          className="ui-autocomplete__item__group-label"
          __css={styles.groupLabel}
          lineClamp={1}
          {...labelProps}
        >
          {label}
        </ui.span>

        <ui.ul
          {...getGroupProps({}, ref)}
          className="ui-autocomplete__item__group"
          __css={{ h, minH, ...styles.group }}
        >
          {children}
        </ui.ul>
      </ui.li>
    )
  },
)
