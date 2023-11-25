import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Popover, PopoverTrigger } from "@yamada-ui/popover"
import { cx } from "@yamada-ui/utils"
import type { AutocompleteIconProps } from "./autocomplete-icon"
import { AutocompleteIcon } from "./autocomplete-icon"
import type { AutocompleteListProps } from "./autocomplete-list"
import { AutocompleteList } from "./autocomplete-list"
import type { UseAutocompleteProps } from "./use-autocomplete"
import {
  AutocompleteProvider,
  useAutocomplete,
  AutocompleteDescendantsContextProvider,
  useAutocompleteContext,
  useAutocompleteInput,
} from "./use-autocomplete"
import { AutocompleteCreate, AutocompleteEmpty } from "./"

type AutocompleteOptions = {
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * Props for autocomplete container element.
   */
  containerProps?: Omit<HTMLUIProps<"div">, "children">
  /**
   * Props for autocomplete list element.
   */
  listProps?: Omit<AutocompleteListProps, "children">
  /**
   * Props for autocomplete input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for autocomplete icon element.
   */
  iconProps?: AutocompleteIconProps
}

export type AutocompleteProps = ThemeProps<"Select"> &
  Omit<
    UseAutocompleteProps<string>,
    "maxSelectedValues" | "omitSelectedValues"
  > &
  AutocompleteOptions

export const Autocomplete = forwardRef<AutocompleteProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("Autocomplete", props)
    let {
      className,
      defaultValue = "",
      color,
      h,
      height,
      minH,
      minHeight,
      containerProps,
      listProps,
      inputProps,
      iconProps,
      children,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const {
      descendants,
      formControlProps,
      getPopoverProps,
      getContainerProps,
      getFieldProps,
      allowCreate,
      isEmpty,
      inputValue,
      computedChildren,
      ...rest
    } = useAutocomplete({ ...computedProps, defaultValue, children })

    h ??= height
    minH ??= minHeight

    const css: CSSUIObject = {
      position: "relative",
      w: "100%",
      h: "fit-content",
      color,
      ...styles.container,
    }

    return (
      <AutocompleteDescendantsContextProvider value={descendants}>
        <AutocompleteProvider
          value={{
            ...rest,
            formControlProps,
            inputValue,
            allowCreate,
            isEmpty,
            styles,
          }}
        >
          <Popover {...getPopoverProps()}>
            <ui.div
              className={cx("ui-autocomplete", className)}
              __css={css}
              {...getContainerProps(containerProps)}
            >
              <AutocompleteField
                h={h}
                minH={minH}
                inputProps={inputProps}
                {...getFieldProps({}, ref)}
              />

              <AutocompleteIcon {...iconProps} {...formControlProps} />

              {!isEmpty ? (
                <AutocompleteList {...listProps}>
                  {allowCreate ? <AutocompleteCreate /> : <AutocompleteEmpty />}

                  {children ?? computedChildren}
                </AutocompleteList>
              ) : (
                <AutocompleteList {...listProps}>
                  {allowCreate && inputValue ? (
                    <AutocompleteCreate />
                  ) : (
                    <AutocompleteEmpty />
                  )}
                </AutocompleteList>
              )}
            </ui.div>
          </Popover>
        </AutocompleteProvider>
      </AutocompleteDescendantsContextProvider>
    )
  },
)

type AutocompleteFieldProps = HTMLUIProps<"div"> &
  Pick<AutocompleteProps, "inputProps">

const AutocompleteField = forwardRef<AutocompleteFieldProps, "input">(
  ({ className, h, minH, placeholder, inputProps, ...rest }, ref) => {
    const { displayValue, inputValue, styles } = useAutocompleteContext()

    const { getInputProps } = useAutocompleteInput()

    const css: CSSUIObject = {
      paddingEnd: "2rem",
      h,
      minH,
      display: "flex",
      alignItems: "center",
      ...styles.field,
      cursor: "text",
    }

    return (
      <PopoverTrigger>
        <ui.div
          className={cx("ui-autocomplete__field", className)}
          __css={css}
          {...rest}
        >
          <ui.input
            className="ui-autocomplete__field__input"
            display="inline-block"
            w="full"
            placeholder={placeholder}
            {...getInputProps(
              { ...inputProps, value: inputValue || displayValue || "" },
              ref,
            )}
          />
        </ui.div>
      </PopoverTrigger>
    )
  },
)
