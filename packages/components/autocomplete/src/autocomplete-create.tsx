import type { CSSUIObject, FC, HTMLUIProps } from "@yamada-ui/core"
import type { ReactElement } from "react"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx, runIfFunc } from "@yamada-ui/utils"
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
  extends Omit<HTMLUIProps<"li">, "children">,
    AutocompleteCreateOptions {}

export const AutocompleteCreate = forwardRef<AutocompleteCreateProps, "li">(
  ({ className, children, icon, ...rest }, ref) => {
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
      <ui.li
        className={cx("ui-autocomplete__item--create", className)}
        __css={css}
        {...getCreateProps(rest, ref)}
      >
        {icon !== null ? (
          <AutocompleteItemIcon>
            {icon || <AutocompletePlusIcon />}
          </AutocompleteItemIcon>
        ) : null}
        {icon ? (
          <ui.span style={{ flex: 1, pointerEvents: "none" }} lineClamp={1}>
            {runIfFunc(children, inputValue)}
          </ui.span>
        ) : (
          runIfFunc(children, inputValue)
        )}
      </ui.li>
    )
  },
)

AutocompleteCreate.displayName = "AutocompleteCreate"
AutocompleteCreate.__ui__ = "AutocompleteCreate"

const AutocompletePlusIcon: FC = () => (
  <svg height="1em" viewBox="0 0 45.402 45.402" width="1em">
    <path
      d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141   c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27   c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435   c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
      fill="currentColor"
    />
  </svg>
)

AutocompletePlusIcon.displayName = "AutocompletePlusIcon"
AutocompletePlusIcon.__ui__ = "AutocompletePlusIcon"
