import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { Popover, PopoverTrigger } from "@yamada-ui/popover"
import type { PortalProps } from "@yamada-ui/portal"
import { Portal } from "@yamada-ui/portal"
import { cx, handlerAll, runIfFunc } from "@yamada-ui/utils"
import type {
  CSSProperties,
  FC,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react"
import { cloneElement, useMemo } from "react"
import {
  AutocompleteDescendantsContextProvider,
  AutocompleteProvider,
  useAutocompleteContext,
} from "./autocomplete-context"
import { AutocompleteCreate } from "./autocomplete-create"
import type { AutocompleteCreateProps } from "./autocomplete-create"
import { AutocompleteEmpty } from "./autocomplete-empty"
import type { AutocompleteEmptyProps } from "./autocomplete-empty"
import type { AutocompleteIconProps } from "./autocomplete-icon"
import { AutocompleteClearIcon, AutocompleteIcon } from "./autocomplete-icon"
import type { AutocompleteListProps } from "./autocomplete-list"
import { AutocompleteList } from "./autocomplete-list"
import type { UseAutocompleteProps } from "./use-autocomplete"
import { useAutocomplete, useAutocompleteInput } from "./use-autocomplete"

interface MultiAutocompleteOptions {
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
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for multi autocomplete content element.
   */
  contentProps?: Omit<MotionProps, "children">
  /**
   * Props for multi autocomplete list element.
   */
  listProps?: Omit<AutocompleteListProps, "children">
  /**
   * Props for multi autocomplete field element.
   */
  fieldProps?: Omit<
    MultiAutocompleteFieldProps,
    "component" | "separator" | "keepPlaceholder" | "inputProps" | "children"
  >
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
  /**
   * If `true`, the list element will be closed when value is selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
  /**
   * Props for autocomplete create element.
   */
  createProps?: Omit<AutocompleteCreateProps, "children">
  /**
   * Props for autocomplete empty element.
   */
  emptyProps?: Omit<AutocompleteEmptyProps, "children">
  /**
   * The header of the autocomplete content element.
   */
  header?: ReactNode | FC<{ value: string[] | undefined; onClose: () => void }>
  /**
   * The footer of the autocomplete content element.
   */
  footer?: ReactNode | FC<{ value: string[] | undefined; onClose: () => void }>
}

export interface MultiAutocompleteProps
  extends ThemeProps<"MultiAutocomplete">,
    Omit<UseAutocompleteProps<string[]>, "closeOnSelect">,
    MultiAutocompleteOptions {}

/**
 * `MultiAutocomplete` is a component used to display suggestions based on user text input and to obtain multiple values.
 *
 * @see Docs https://yamada-ui.com/components/forms/multi-autocomplete
 */
export const MultiAutocomplete = forwardRef<MultiAutocompleteProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle(
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
      contentProps,
      listProps,
      fieldProps,
      inputProps,
      iconProps,
      clearIconProps,
      portalProps = { isDisabled: true },
      createProps,
      emptyProps,
      header,
      footer,
      children,
      ...computedProps
    } = omitThemeProps(mergedProps)

    const {
      value,
      onClose,
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
      color,
      ...styles.container,
    }

    return (
      <AutocompleteDescendantsContextProvider value={descendants}>
        <AutocompleteProvider
          value={{
            ...rest,
            value,
            onClose,
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
                __css={{ ...styles.inner }}
              >
                <MultiAutocompleteField
                  component={component}
                  separator={separator}
                  keepPlaceholder={keepPlaceholder}
                  h={h}
                  minH={minH}
                  inputProps={inputProps}
                  {...getFieldProps(fieldProps, ref)}
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
                  <AutocompleteList
                    header={runIfFunc(header, { value, onClose })}
                    footer={runIfFunc(footer, { value, onClose })}
                    contentProps={contentProps}
                    {...listProps}
                  >
                    {allowCreate ? (
                      <AutocompleteCreate {...createProps} />
                    ) : (
                      <AutocompleteEmpty {...emptyProps} />
                    )}

                    {children ?? computedChildren}
                  </AutocompleteList>
                </Portal>
              ) : (
                <Portal {...portalProps}>
                  <AutocompleteList
                    header={runIfFunc(header, { value, onClose })}
                    footer={runIfFunc(footer, { value, onClose })}
                    contentProps={contentProps}
                    {...listProps}
                  >
                    {allowCreate && inputValue ? (
                      <AutocompleteCreate {...createProps} />
                    ) : (
                      <AutocompleteEmpty {...emptyProps} />
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

interface MultiAutocompleteFieldProps
  extends HTMLUIProps,
    Pick<
      MultiAutocompleteProps,
      "component" | "separator" | "keepPlaceholder" | "inputProps"
    > {}

const MultiAutocompleteField = forwardRef<MultiAutocompleteFieldProps, "input">(
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
          const onRemove: MouseEventHandler<HTMLElement> = (ev) => {
            ev.stopPropagation()

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
            marginBlockStart: "0.125rem",
            marginBlockEnd: "0.125rem",
            marginInlineEnd: "0.25rem",
          }

          return el
            ? cloneElement(el as ReactElement, { key: index, style })
            : null
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
      h,
      minH,
      ...styles.field,
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
            aria-label="Input value"
            className="ui-multi-autocomplete__input"
            display="inline-block"
            flex="1"
            minW="0px"
            overflow="hidden"
            marginBlockStart="0.125rem"
            marginBlockEnd="0.125rem"
            aria-multiselectable="true"
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
