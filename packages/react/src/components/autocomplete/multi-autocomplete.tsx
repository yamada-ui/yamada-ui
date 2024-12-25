import type {
  CSSProperties,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react"
import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import type { MotionProps } from "../motion"
import type { PortalProps } from "../portal"
import type { AutocompleteCreateProps } from "./autocomplete-create"
import type { AutocompleteEmptyProps } from "./autocomplete-empty"
import type { AutocompleteIconProps } from "./autocomplete-icon"
import type { AutocompleteListProps } from "./autocomplete-list"
import type { UseAutocompleteProps } from "./use-autocomplete"
import { cloneElement, useMemo } from "react"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { cx, handlerAll, runIfFunc } from "../../utils"
import { Popover, PopoverTrigger } from "../popover"
import { Portal } from "../portal"
import {
  AutocompleteContext,
  AutocompleteDescendantsContextProvider,
  useAutocompleteContext,
} from "./autocomplete-context"
import { AutocompleteCreate } from "./autocomplete-create"
import { AutocompleteEmpty } from "./autocomplete-empty"
import { AutocompleteClearIcon, AutocompleteIcon } from "./autocomplete-icon"
import { AutocompleteList } from "./autocomplete-list"
import { useAutocomplete, useAutocompleteInput } from "./use-autocomplete"

interface MultiAutocompleteOptions {
  /**
   * If `true`, display the select clear icon.
   *
   * @default true
   */
  clearable?: boolean
  /**
   * If `true`, the list element will be closed when value is selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
  /**
   * The custom display value to use.
   */
  component?: FC<{
    index: number
    label: string
    value: number | string
    onRemove: MouseEventHandler<HTMLElement>
  }>
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * The footer of the autocomplete content element.
   */
  footer?: FC<{ value: string[] | undefined; onClose: () => void }> | ReactNode
  /**
   * The header of the autocomplete content element.
   */
  header?: FC<{ value: string[] | undefined; onClose: () => void }> | ReactNode
  /**
   * If `true`, keep the placeholder.
   *
   * @default false
   */
  keepPlaceholder?: boolean
  /**
   * The visual separator between each value.
   *
   * @default ','
   */
  separator?: string
  /**
   * Props for multi autocomplete clear icon element.
   */
  clearIconProps?: AutocompleteIconProps
  /**
   * Props for multi autocomplete container element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for multi autocomplete content element.
   */
  contentProps?: Omit<MotionProps, "children">
  /**
   * Props for autocomplete create element.
   */
  createProps?: Omit<AutocompleteCreateProps, "children">
  /**
   * Props for autocomplete empty element.
   */
  emptyProps?: Omit<AutocompleteEmptyProps, "children">
  /**
   * Props for multi autocomplete field element.
   */
  fieldProps?: Omit<
    MultiAutocompleteFieldProps,
    "children" | "component" | "inputProps" | "keepPlaceholder" | "separator"
  >
  /**
   * Props for multi autocomplete icon element.
   */
  iconProps?: AutocompleteIconProps
  /**
   * Props for multi autocomplete input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for multi autocomplete list element.
   */
  listProps?: Omit<AutocompleteListProps, "children">
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ disabled: true }'
   *
   */
  portalProps?: Omit<PortalProps, "children">
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
export const MultiAutocomplete: FC<MultiAutocompleteProps> = ({
  ref,
  ...props
}) => {
  const [styles, mergedProps] = useComponentMultiStyle(
    "MultiAutocomplete",
    props,
  )
  const {
    className,
    clearable = true,
    closeOnSelect = false,
    color,
    component,
    defaultValue = [],
    footer,
    height,
    h = height,
    header,
    keepPlaceholder = false,
    minHeight,
    minH = minHeight,
    separator,
    clearIconProps,
    containerProps,
    contentProps,
    createProps,
    emptyProps,
    fieldProps,
    iconProps,
    inputProps,
    listProps,
    portalProps = { disabled: true },
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {
    allowCreate,
    children,
    descendants,
    empty,
    inputValue,
    value,
    formControlProps,
    getContainerProps,
    getFieldProps,
    getPopoverProps,
    onClear,
    onClose,
    ...rest
  } = useAutocomplete<string[]>({
    ...computedProps,
    closeOnSelect,
    defaultValue,
  })

  const css: CSSUIObject = {
    color,
    h: "fit-content",
    w: "100%",
    ...styles.container,
  }

  return (
    <AutocompleteDescendantsContextProvider value={descendants}>
      <AutocompleteContext
        value={{
          ...rest,
          allowCreate,
          empty,
          inputValue,
          styles,
          value,
          formControlProps,
          onClose,
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
                h={h}
                keepPlaceholder={keepPlaceholder}
                minH={minH}
                separator={separator}
                inputProps={inputProps}
                {...getFieldProps(fieldProps, ref)}
              />

              {clearable && value.length ? (
                <AutocompleteClearIcon
                  {...clearIconProps}
                  onClick={handlerAll(clearIconProps?.onClick, onClear)}
                  {...formControlProps}
                />
              ) : (
                <AutocompleteIcon {...iconProps} {...formControlProps} />
              )}
            </ui.div>

            <Portal {...portalProps}>
              <AutocompleteList
                footer={runIfFunc(footer, { value, onClose })}
                header={runIfFunc(header, { value, onClose })}
                contentProps={contentProps}
                {...listProps}
              >
                {!empty ? (
                  <>
                    {allowCreate ? (
                      <AutocompleteCreate {...createProps} />
                    ) : (
                      <AutocompleteEmpty {...emptyProps} />
                    )}

                    {children}
                  </>
                ) : allowCreate && inputValue ? (
                  <AutocompleteCreate {...createProps} />
                ) : (
                  <AutocompleteEmpty {...emptyProps} />
                )}
              </AutocompleteList>
            </Portal>
          </ui.div>
        </Popover>
      </AutocompleteContext>
    </AutocompleteDescendantsContextProvider>
  )
}

MultiAutocomplete.__ui__ = "MultiAutocomplete"

interface MultiAutocompleteFieldProps
  extends HTMLUIProps<"input">,
    Pick<
      MultiAutocompleteProps,
      "component" | "inputProps" | "keepPlaceholder" | "separator"
    > {}

const MultiAutocompleteField: FC<MultiAutocompleteFieldProps> = ({
  ref,
  className,
  component,
  h,
  keepPlaceholder,
  minH,
  placeholder,
  separator = ",",
  inputProps,
  ...rest
}) => {
  const { inputRef, inputValue, label, open, styles, value, onChange } =
    useAutocompleteContext()
  const { getInputProps } = useAutocompleteInput()

  const cloneChildren = useMemo(() => {
    if (!label?.length) return null

    if (component) {
      return (label as string[]).map((label, index) => {
        if (!value[index]) return null

        const onRemove: MouseEventHandler<HTMLElement> = (ev) => {
          if (!value[index]) return

          ev.stopPropagation()

          onChange(value[index])

          if (inputRef.current) inputRef.current.focus()
        }

        const el = component({
          index,
          label,
          value: value[index],
          onRemove,
        })

        const style: CSSProperties = {
          marginBlockEnd: "0.125rem",
          marginBlockStart: "0.125rem",
          marginInlineEnd: "0.25rem",
        }

        return el
          ? cloneElement<any>(el as ReactElement, { key: index, style })
          : null
      })
    } else {
      return (label as string[]).map((value, index) => {
        const last = label.length === index + 1

        return (
          <ui.span key={index} display="inline-block" me="0.25rem">
            {value}
            {!last || open ? separator : null}
          </ui.span>
        )
      })
    }
  }, [label, component, value, onChange, open, inputRef, separator])

  const css: CSSUIObject = {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    h,
    minH,
    pe: "2rem",
    ...styles.field,
    cursor: "text",
  }

  if (label?.length && component) css.py = "0.125rem"

  return (
    <PopoverTrigger>
      <ui.div
        className={cx("ui-multi-autocomplete__field", className)}
        __css={css}
        {...rest}
      >
        {cloneChildren}

        <ui.input
          className="ui-multi-autocomplete__field__input"
          display="inline-block"
          flex="1"
          marginBlockEnd="0.125rem"
          marginBlockStart="0.125rem"
          minW="0px"
          overflow="hidden"
          placeholder={
            !label?.length || (keepPlaceholder && open)
              ? placeholder
              : undefined
          }
          {...getInputProps({ ...inputProps, value: inputValue }, ref)}
        />
      </ui.div>
    </PopoverTrigger>
  )
}

MultiAutocompleteField.__ui__ = "MultiAutocompleteField"
