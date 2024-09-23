import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { FC, ReactElement } from "react"
import { useAutocompleteContext } from "./autocomplete-context"
import { AutocompleteItemIcon } from "./autocomplete-icon"
import { useAutocompleteEmpty } from "./use-autocomplete-option"

interface AutocompleteEmptyOptions {
  /**
   * The autocomplete empty option icon to use.
   */
  icon?: ReactElement
  /**
   * The label of the autocomplete empty option.
   */
  children?: string
}

export interface AutocompleteEmptyProps
  extends Omit<HTMLUIProps<"li">, "children">,
    AutocompleteEmptyOptions {}

export const AutocompleteEmpty = forwardRef<AutocompleteEmptyProps, "li">(
  ({ className, icon, children, ...rest }, ref) => {
    const { emptyMessage, styles } = useAutocompleteContext()
    const { getEmptyProps } = useAutocompleteEmpty()

    children ??= emptyMessage

    const css: CSSUIObject = {
      pointerEvents: "none",
      ...styles.item,
    }

    return (
      <ui.li
        className={cx(
          "ui-autocomplete__item",
          "ui-autocomplete__item--empty",
          className,
        )}
        __css={css}
        {...getEmptyProps(rest, ref)}
      >
        {icon !== null ? (
          <AutocompleteItemIcon>{icon || <MinusIcon />}</AutocompleteItemIcon>
        ) : null}
        {icon ? (
          <ui.span style={{ pointerEvents: "none", flex: 1 }} lineClamp={1}>
            {children}
          </ui.span>
        ) : (
          children
        )}
      </ui.li>
    )
  },
)

const MinusIcon: FC = () => (
  <svg viewBox="0 0 448 512" width="1em" height="1em">
    <path
      fill="currentColor"
      d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
    />
  </svg>
)
