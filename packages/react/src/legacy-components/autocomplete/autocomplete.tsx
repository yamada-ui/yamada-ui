import type { ReactNode } from "react"
import type { MotionProps } from "../../components/motion"
import type { PortalProps } from "../../components/portal"
import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import type { AutocompleteCreateProps } from "./autocomplete-create"
import type { AutocompleteEmptyProps } from "./autocomplete-empty"
import type { AutocompleteIconProps } from "./autocomplete-icon"
import type { AutocompleteListProps } from "./autocomplete-list"
import type { UseAutocompleteProps } from "./use-autocomplete"
import { Popover, PopoverTrigger } from "../../components/popover"
import { Portal } from "../../components/portal"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { cx, runIfFunc } from "../../utils"
import {
  AutocompleteContext,
  AutocompleteDescendantsContextProvider,
  useAutocompleteContext,
} from "./autocomplete-context"
import { AutocompleteCreate } from "./autocomplete-create"
import { AutocompleteEmpty } from "./autocomplete-empty"
import { AutocompleteIcon } from "./autocomplete-icon"
import { AutocompleteList } from "./autocomplete-list"
import { useAutocomplete, useAutocompleteInput } from "./use-autocomplete"

interface AutocompleteOptions {
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
  footer?: FC<{ value: string | undefined; onClose: () => void }> | ReactNode
  /**
   * The header of the autocomplete content element.
   */
  header?: FC<{ value: string | undefined; onClose: () => void }> | ReactNode
  /**
   * Props for autocomplete container element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for autocomplete content element.
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
   * Props for autocomplete field element.
   */
  fieldProps?: Omit<AutocompleteFieldProps, "children" | "inputProps">
  /**
   * Props for autocomplete icon element.
   */
  iconProps?: AutocompleteIconProps
  /**
   * Props for autocomplete input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for autocomplete list element.
   */
  listProps?: Omit<AutocompleteListProps, "children">
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ disabled: true }'
   */
  portalProps?: Omit<PortalProps, "children">
}

export interface AutocompleteProps
  extends ThemeProps<"Autocomplete">,
    Omit<UseAutocompleteProps, "maxSelectValues" | "omitSelectedValues">,
    AutocompleteOptions {}

/**
 * `Autocomplete` is a component used to display suggestions in response to user text input.
 *
 * @see Docs https://yamada-ui.com/components/forms/autocomplete
 */
export const Autocomplete: FC<AutocompleteProps> = ({ ref, ...props }) => {
  const [styles, mergedProps] = useComponentMultiStyle("Autocomplete", props)
  const {
    className,
    color,
    defaultValue = "",
    footer,
    h,
    header,
    height = h,
    minH,
    minHeight = minH,
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
    onClose,
    ...rest
  } = useAutocomplete({ ...computedProps, defaultValue })
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
            className={cx("ui-autocomplete", className)}
            __css={css}
            {...getContainerProps(containerProps)}
          >
            <ui.div
              className="ui-autocomplete__inner"
              __css={{ position: "relative", ...styles.inner }}
            >
              <AutocompleteField
                height={height}
                minHeight={minHeight}
                inputProps={inputProps}
                {...getFieldProps(fieldProps, ref)}
              />

              <AutocompleteIcon {...iconProps} {...formControlProps} />
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

Autocomplete.__ui__ = "Autocomplete"

interface AutocompleteFieldProps
  extends HTMLUIProps<"input">,
    Pick<AutocompleteProps, "inputProps"> {}

const AutocompleteField: FC<AutocompleteFieldProps> = ({
  ref,
  className,
  h,
  minH,
  placeholder,
  inputProps,
  ...rest
}) => {
  const { inputValue, label, styles } = useAutocompleteContext()
  const { getInputProps } = useAutocompleteInput()

  const css: CSSUIObject = {
    alignItems: "center",
    display: "flex",
    h,
    minH,
    pe: "2rem",
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
          placeholder={placeholder}
          w="100%"
          {...getInputProps(
            { ...inputProps, value: inputValue || label || "" },
            ref,
          )}
        />
      </ui.div>
    </PopoverTrigger>
  )
}

AutocompleteField.__ui__ = "AutocompleteField"
