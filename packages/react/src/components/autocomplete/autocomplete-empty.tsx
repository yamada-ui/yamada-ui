import type { ReactElement } from "react"
import type { CSSUIObject, FC, HTMLUIProps } from "../../core"
import { ui } from "../../core"
import { cx } from "../../utils"
import { MinusIcon } from "../icon"
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

export const AutocompleteEmpty: FC<AutocompleteEmptyProps> = ({
  ref,
  className,
  children,
  icon,
  ...rest
}) => {
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
          {icon || <MinusIcon boxSize="5.5" />}
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
}

AutocompleteEmpty.__ui__ = "AutocompleteEmpty"
