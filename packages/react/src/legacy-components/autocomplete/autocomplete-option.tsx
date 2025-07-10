import type { ReactElement } from "react"
import type { CSSUIObject, FC } from "../../core"
import type { UseAutocompleteOptionProps } from "./use-autocomplete-option"
import { CheckIcon } from "../../components/icon"
import { ui } from "../../core"
import { cx } from "../../utils"
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

export const AutocompleteOption: FC<AutocompleteOptionProps> = ({
  ref,
  className,
  icon,
  ...rest
}) => {
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
          {icon || <CheckIcon boxSize="5" />}
        </AutocompleteItemIcon>
      ) : null}

      <ui.span style={{ flex: 1 }} data-label>
        {children}
      </ui.span>
    </ui.div>
  )
}

AutocompleteOption.__ui__ = "AutocompleteOption"
