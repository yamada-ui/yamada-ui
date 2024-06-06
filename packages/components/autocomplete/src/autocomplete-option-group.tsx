import type { HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { UseAutocompleteOptionGroupProps } from "./use-autocomplete"
import {
  useAutocompleteContext,
  useAutocompleteOptionGroup,
} from "./use-autocomplete"

type AutocompleteOptionGroupOptions = UseAutocompleteOptionGroupProps

export type AutocompleteOptionGroupProps = HTMLUIProps<"ul"> &
  AutocompleteOptionGroupOptions

export const AutocompleteOptionGroup = forwardRef<
  AutocompleteOptionGroupProps,
  "ul"
>(
  (
    { className, color, h, height, minH, minHeight, children, ...rest },
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
          className="ui-autocomplete__group-label"
          __css={styles.groupLabel}
          lineClamp={1}
        >
          {label}
        </ui.span>

        <ui.ul
          {...getGroupProps({}, ref)}
          className="ui-autocomplete__group"
          __css={{ h, minH, ...styles.group }}
        >
          {children}
        </ui.ul>
      </ui.li>
    )
  },
)
