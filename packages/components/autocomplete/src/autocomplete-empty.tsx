import type { CSSUIObject, FC, HTMLUIProps } from "@yamada-ui/core"
import type { ReactElement } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useAutocompleteContext } from "./autocomplete-context"
import { AutocompleteItemIcon } from "./autocomplete-icon"
import { useAutocompleteEmpty } from "./use-autocomplete-option"

interface AutocompleteEmptyOptions {
  /**
   * The label of the autocomplete empty option.
   */
  children?: string
  /**
   * The autocomplete empty option icon to use.
   */
  icon?: null | ReactElement
}

export interface AutocompleteEmptyProps
  extends Omit<HTMLUIProps, "children">,
    AutocompleteEmptyOptions {}

export const AutocompleteEmpty = forwardRef<AutocompleteEmptyProps, "div">(
  ({ className, children, icon, ...rest }, ref) => {
    const { emptyMessage, styles } = useAutocompleteContext()
    const { getEmptyProps } = useAutocompleteEmpty()

    children ??= emptyMessage

    const css: CSSUIObject = {
      alignItems: "center",
      color: "inherit",
      display: "flex",
      flex: "0 0 auto",
      gap: "0.75rem",
      outline: 0,
      pointerEvents: "none",
      textAlign: "start",
      textDecoration: "none",
      userSelect: "none",
      width: "100%",
      ...styles.item,
    }

    return (
      <ui.div
        className={cx("ui-autocomplete__item--empty", className)}
        __css={css}
        {...getEmptyProps(rest, ref)}
      >
        {icon !== null ? (
          <AutocompleteItemIcon>
            {icon || <AutocompleteMinusIcon />}
          </AutocompleteItemIcon>
        ) : null}

        {icon ? (
          <ui.span style={{ flex: 1, pointerEvents: "none" }} lineClamp={1}>
            {children}
          </ui.span>
        ) : (
          children
        )}
      </ui.div>
    )
  },
)

AutocompleteEmpty.displayName = "AutocompleteEmpty"
AutocompleteEmpty.__ui__ = "AutocompleteEmpty"

const AutocompleteMinusIcon: FC = () => (
  <svg height="1em" viewBox="0 0 448 512" width="1em">
    <path
      d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
      fill="currentColor"
    />
  </svg>
)

AutocompleteMinusIcon.displayName = "AutocompleteMinusIcon"
AutocompleteMinusIcon.__ui__ = "AutocompleteMinusIcon"
