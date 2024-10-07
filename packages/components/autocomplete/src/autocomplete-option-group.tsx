import type { HTMLUIProps } from "@yamada-ui/core"
import type { UseAutocompleteOptionGroupProps } from "./use-autocomplete-option-group"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useAutocompleteContext } from "./autocomplete-context"
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
        __css={{ color, h: "fit-content", w: "100%" }}
        {...getContainerProps()}
      >
        <ui.span
          className="ui-autocomplete__item__group-label"
          lineClamp={1}
          __css={styles.groupLabel}
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

AutocompleteOptionGroup.displayName = "AutocompleteOptionGroup"
AutocompleteOptionGroup.__ui__ = "AutocompleteOptionGroup"
