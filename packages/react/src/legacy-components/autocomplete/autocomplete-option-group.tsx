import type { FC, HTMLUIProps } from "../../core"
import type { UseAutocompleteOptionGroupProps } from "./use-autocomplete-option-group"
import { ui } from "../../core"
import { cx } from "../../utils"
import { useAutocompleteContext } from "./autocomplete-context"
import { useAutocompleteOptionGroup } from "./use-autocomplete-option-group"

interface AutocompleteOptionGroupOptions
  extends UseAutocompleteOptionGroupProps {
  /**
   * Props for autocomplete option group element.
   */
  labelProps?: HTMLUIProps<"header">
}

export interface AutocompleteOptionGroupProps
  extends HTMLUIProps,
    AutocompleteOptionGroupOptions {}

export const AutocompleteOptionGroup: FC<AutocompleteOptionGroupProps> = ({
  ref,
  className,
  children,
  color,
  h,
  height = h,
  minH,
  minHeight = minH,
  labelProps,
  ...rest
}) => {
  const { styles } = useAutocompleteContext()
  const { label, getContainerProps, getGroupProps, getLabelProps } =
    useAutocompleteOptionGroup(rest)

  return (
    <ui.section
      className={cx(
        "ui-autocomplete__item",
        "ui-autocomplete__item--group",
        className,
      )}
      __css={{ color, h: "fit-content", w: "100%" }}
      {...getContainerProps()}
    >
      <ui.header
        className="ui-autocomplete__item__group-label"
        lineClamp={1}
        __css={styles.groupLabel}
        {...getLabelProps(labelProps)}
      >
        {label}
      </ui.header>

      <ui.div
        {...getGroupProps({}, ref)}
        className="ui-autocomplete__item__group"
        height={height}
        minHeight={minHeight}
        __css={styles.group}
      >
        {children}
      </ui.div>
    </ui.section>
  )
}

AutocompleteOptionGroup.__ui__ = "AutocompleteOptionGroup"
