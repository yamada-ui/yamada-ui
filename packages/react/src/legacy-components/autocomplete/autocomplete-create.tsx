import type { ReactElement } from "react"
import type { CSSUIObject, FC, HTMLUIProps } from "../../core"
import { PlusIcon } from "../../components/icon"
import { ui } from "../../core"
import { cx, runIfFunc } from "../../utils"
import { useAutocompleteContext } from "./autocomplete-context"
import { AutocompleteItemIcon } from "./autocomplete-icon"
import { useAutocompleteCreate } from "./use-autocomplete-option"

interface AutocompleteCreateOptions {
  /**
   * The label of the autocomplete create option.
   */
  children?: ((inputValue: string) => string) | string
  /**
   * The autocomplete create option icon to use.
   */
  icon?: null | ReactElement
}

export interface AutocompleteCreateProps
  extends Omit<HTMLUIProps, "children">,
    AutocompleteCreateOptions {}

export const AutocompleteCreate: FC<AutocompleteCreateProps> = ({
  ref,
  className,
  children,
  icon,
  ...rest
}) => {
  const { inputValue, styles } = useAutocompleteContext()
  const { getCreateProps } = useAutocompleteCreate()

  children ??= inputValue

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
      className={cx("ui-autocomplete__item--create", className)}
      __css={css}
      {...getCreateProps(rest, ref)}
    >
      {icon !== null ? (
        <AutocompleteItemIcon>
          {icon || <PlusIcon boxSize="5.5" />}
        </AutocompleteItemIcon>
      ) : null}
      {icon ? (
        <ui.span style={{ flex: 1, pointerEvents: "none" }} lineClamp={1}>
          {runIfFunc(children, inputValue)}
        </ui.span>
      ) : (
        runIfFunc(children, inputValue)
      )}
    </ui.div>
  )
}

AutocompleteCreate.__ui__ = "AutocompleteCreate"
