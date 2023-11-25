import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Popover, PopoverTrigger } from "@yamada-ui/popover"
import { cx, handlerAll } from "@yamada-ui/utils"
import type { CSSProperties, FC, MouseEventHandler, ReactElement } from "react"
import { cloneElement, useMemo } from "react"
import type { AutocompleteIconProps } from "./autocomplete-icon"
import { AutocompleteClearIcon, AutocompleteIcon } from "./autocomplete-icon"
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

type MultiAutocompleteOptions = {
  /**
   * The visual separator between each value.
   *
   * @default ','
   */
  separator?: string
  /**
   * The custom display value to use.
   */
  component?: FC<{
    value: string | number
    displayValue: string
    index: number
    onRemove: MouseEventHandler<HTMLElement>
  }>
  /**
   * If `true`, keep the placeholder.
   *
   * @default false
   */
  keepPlaceholder?: boolean
  /**
   * If `true`, display the select clear icon.
   *
   * @default true
   */
  isClearable?: boolean
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * Props for multi autocomplete container element.
   */
  containerProps?: Omit<HTMLUIProps<"div">, "children">
  /**
   * Props for multi autocomplete list element.
   */
  listProps?: Omit<AutocompleteListProps, "children">
  /**
   * Props for multi autocomplete input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for multi autocomplete icon element.
   */
  iconProps?: AutocompleteIconProps
  /**
   * Props for multi autocomplete clear icon element.
   */
  clearIconProps?: AutocompleteIconProps
}

export type MultiAutocompleteProps = ThemeProps<"Select"> &
  UseAutocompleteProps<string[]> &
  MultiAutocompleteOptions

export const MultiAutocomplete = forwardRef<MultiAutocompleteProps, "div">(
  (props, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle(
      "MultiAutocomplete",
      props,
    )
    let {
      className,
      defaultValue = [],
      component,
      separator,
      isClearable = true,
      color,
      h,
      height,
      minH,
      minHeight,
      closeOnSelect = false,
      keepPlaceholder = false,
      containerProps,
      listProps,
      inputProps,
      iconProps,
      clearIconProps,
      children,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const {
      value,
      descendants,
      formControlProps,
      getPopoverProps,
      getContainerProps,
      getFieldProps,
      allowCreate,
      isEmpty,
      inputValue,
      computedChildren,
      onClear,
      ...rest
    } = useAutocomplete<string[]>({
      ...computedProps,
      defaultValue,
      closeOnSelect,
      children,
    })

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
            value,
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
              <MultiAutocompleteField
                component={component}
                separator={separator}
                keepPlaceholder={keepPlaceholder}
                h={h}
                minH={minH}
                inputProps={inputProps}
                {...getFieldProps({}, ref)}
              />

              {isClearable && value.length ? (
                <AutocompleteClearIcon
                  {...clearIconProps}
                  onClick={handlerAll(clearIconProps?.onClick, onClear)}
                  {...formControlProps}
                />
              ) : (
                <AutocompleteIcon {...iconProps} {...formControlProps} />
              )}

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

type MultiAutocompleteFieldProps = HTMLUIProps<"div"> &
  Pick<
    MultiAutocompleteProps,
    "component" | "separator" | "keepPlaceholder" | "inputProps"
  >

const MultiAutocompleteField = forwardRef<MultiAutocompleteFieldProps, "div">(
  (
    {
      className,
      component,
      separator = ",",
      keepPlaceholder,
      h,
      minH,
      placeholder,
      inputProps,
      ...rest
    },
    ref,
  ) => {
    const {
      value,
      displayValue,
      inputValue,
      onChange,
      isOpen,
      inputRef,
      styles,
    } = useAutocompleteContext()

    const { getInputProps } = useAutocompleteInput()

    const cloneChildren = useMemo(() => {
      if (!displayValue?.length) return null

      if (component) {
        return (displayValue as string[]).map((displayValue, index) => {
          const onRemove: MouseEventHandler<HTMLElement> = (e) => {
            e.stopPropagation()

            onChange(value[index])

            if (inputRef.current) inputRef.current.focus()
          }

          const el = component({
            value: value[index],
            displayValue,
            index,
            onRemove,
          })

          const style: CSSProperties = {
            cursor: "default",
            marginBlockStart: "0.125rem",
            marginBlockEnd: "0.125rem",
            marginInlineEnd: "0.25rem",
          }

          return el ? cloneElement(el as ReactElement, { style }) : null
        })
      } else {
        return (displayValue as string[]).map((value, index) => {
          const isLast = displayValue.length === index + 1

          return (
            <ui.span key={index} display="inline-block" me="0.25rem">
              {value}
              {!isLast || isOpen ? separator : null}
            </ui.span>
          )
        })
      }
    }, [displayValue, component, value, onChange, isOpen, inputRef, separator])

    const css: CSSUIObject = {
      paddingEnd: "2rem",
      h,
      minH,
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      ...styles.field,
      cursor: "text",
    }

    return (
      <PopoverTrigger>
        <ui.div
          className={cx("ui-autocomplete__field", className)}
          __css={css}
          py={displayValue?.length && component ? "0.125rem" : undefined}
          {...rest}
        >
          {cloneChildren}

          <ui.input
            className={cx("ui-autocomplete__field__input", className)}
            display="inline-block"
            flex="1"
            overflow="hidden"
            marginBlockStart="0.125rem"
            marginBlockEnd="0.125rem"
            placeholder={
              !displayValue || (keepPlaceholder && isOpen)
                ? placeholder
                : undefined
            }
            {...getInputProps({ ...inputProps, value: inputValue ?? "" }, ref)}
          />
        </ui.div>
      </PopoverTrigger>
    )
  },
)
