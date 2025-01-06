import type { CSSUIObject, FC } from "@yamada-ui/core"
import type { ReactElement } from "react"
import type { UseAutocompleteOptionProps } from "./use-autocomplete-option"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useAutocompleteContext } from "./autocomplete-context"
import { AutocompleteItemIcon } from "./autocomplete-icon"
import { useAutocompleteOption } from "./use-autocomplete-option"

interface AutocompleteOptionOptions {
  /**
   * The autocomplete option icon to use.
   */
  icon?: null | ReactElement
}

export interface AutocompleteOptionProps
  extends UseAutocompleteOptionProps,
    AutocompleteOptionOptions {}

export const AutocompleteOption = forwardRef<AutocompleteOptionProps, "div">(
  ({ className, icon, ...rest }, ref) => {
    const { styles } = useAutocompleteContext()
    const { children, customIcon, selected, getOptionProps } =
      useAutocompleteOption(rest)

    icon ??= customIcon

    const css: CSSUIObject = {
      alignItems: "center",
      color: "inherit",
      display: "flex",
      flex: "0 0 auto",
      gap: "0.75rem",
      outline: 0,
      textAlign: "start",
      textDecoration: "none",
      userSelect: "none",
      width: "100%",
      ...styles.item,
    }

    return (
      <ui.div
        className={cx("ui-autocomplete__item", className)}
        __css={css}
        {...getOptionProps({}, ref)}
      >
        {icon !== null ? (
          <AutocompleteItemIcon opacity={selected ? 1 : 0}>
            {icon || <AutocompleteCheckIcon />}
          </AutocompleteItemIcon>
        ) : null}

        <ui.span style={{ flex: 1 }} data-label>
          {children}
        </ui.span>
      </ui.div>
    )
  },
)

AutocompleteOption.displayName = "AutocompleteOption"
AutocompleteOption.__ui__ = "AutocompleteOption"

const AutocompleteCheckIcon: FC = () => (
  <svg height="1em" viewBox="0 0 14 14" width="1em">
    <polygon
      fill="currentColor"
      points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    />
  </svg>
)

AutocompleteCheckIcon.displayName = "AutocompleteCheckIcon"
AutocompleteCheckIcon.__ui__ = "AutocompleteCheckIcon"
