import { ui, CSSUIObject, forwardRef, HTMLUIProps } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { FC, ReactElement } from "react"
import { AutocompleteItemIcon } from "./autocomplete-icon"
import {
  useAutocompleteContext,
  useAutocompleteEmpty,
} from "./use-autocomplete"

type AutocompleteEmptyOptions = {
  /**
   * The autocomplete empty option icon to use.
   */
  icon?: ReactElement
  /**
   * The label of the autocomplete empty option.
   */
  children?: string
}

export type AutocompleteEmptyProps = Omit<HTMLUIProps<"li">, "children"> &
  AutocompleteEmptyOptions

export const AutocompleteEmpty = forwardRef<AutocompleteEmptyProps, "li">(
  ({ className, icon, children, ...rest }, ref) => {
    const { emptyMessage, styles } = useAutocompleteContext()
    const { getEmptyProps } = useAutocompleteEmpty()

    children ??= emptyMessage

    const css: CSSUIObject = {
      textDecoration: "none",
      color: "inherit",
      userSelect: "none",
      display: "flex",
      width: "100%",
      alignItems: "center",
      textAlign: "start",
      flex: "0 0 auto",
      outline: 0,
      gap: "0.75rem",
      pointerEvents: "none",
      ...styles.item,
    }

    return (
      <ui.li
        className={cx("ui-autocomplete__item--empty", className)}
        __css={css}
        {...getEmptyProps(rest, ref)}
      >
        {icon !== null ? (
          <AutocompleteItemIcon>{icon || <MinusIcon />}</AutocompleteItemIcon>
        ) : null}
        {icon ? (
          <ui.span style={{ pointerEvents: "none", flex: 1 }} noOfLines={1}>
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
