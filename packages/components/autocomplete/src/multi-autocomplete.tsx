import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Popover, PopoverTrigger } from "@yamada-ui/popover"
import type { PortalProps } from "@yamada-ui/portal"
import { Portal } from "@yamada-ui/portal"
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
    label: string
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
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ isDisabled: true }'
   *
   */
  portalProps?: Omit<PortalProps, "children">
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
      portalProps = { isDisabled: true },
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
              className={cx("ui-multi-autocomplete", className)}
              __css={css}
              {...getContainerProps(containerProps)}
            >
              <ui.div
                className="ui-multi-autocomplete__inner"
                __css={{ position: "relative", ...styles.inner }}
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
              </ui.div>

              {!isEmpty ? (
                <Portal {...portalProps}>
                  <AutocompleteList {...listProps}>
                    {allowCreate ? (
                      <AutocompleteCreate />
                    ) : (
                      <AutocompleteEmpty />
                    )}

                    {children ?? computedChildren}
                  </AutocompleteList>
                </Portal>
              ) : (
                <Portal {...portalProps}>
                  <AutocompleteList {...listProps}>
                    {allowCreate && inputValue ? (
                      <AutocompleteCreate />
                    ) : (
                      <AutocompleteEmpty />
                    )}
                  </AutocompleteList>
                </Portal>
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
    const { value, label, inputValue, onChange, isOpen, inputRef, styles } =
      useAutocompleteContext()

    const { getInputProps } = useAutocompleteInput()

    const cloneChildren = useMemo(() => {
      if (!label?.length) return null

      if (component) {
        return (label as string[]).map((label, index) => {
          const onRemove: MouseEventHandler<HTMLElement> = (e) => {
            e.stopPropagation()

            onChange(value[index])

            if (inputRef.current) inputRef.current.focus()
          }

          const el = component({
            value: value[index],
            label,
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
        return (label as string[]).map((value, index) => {
          const isLast = label.length === index + 1

          return (
            <ui.span key={index} display="inline-block" me="0.25rem">
              {value}
              {!isLast || isOpen ? separator : null}
            </ui.span>
          )
        })
      }
    }, [label, component, value, onChange, isOpen, inputRef, separator])

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
          className={cx("ui-multi-autocomplete__field", className)}
          __css={css}
          py={label?.length && component ? "0.125rem" : undefined}
          {...rest}
        >
          {cloneChildren}

          <ui.input
            className="ui-multi-autocomplete__field__input"
            display="inline-block"
            flex="1"
            overflow="hidden"
            marginBlockStart="0.125rem"
            marginBlockEnd="0.125rem"
            placeholder={
              !label || !label?.length || (keepPlaceholder && isOpen)
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
