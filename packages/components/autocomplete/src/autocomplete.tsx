import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { Popover, PopoverTrigger } from "@yamada-ui/popover"
import { Portal } from "@yamada-ui/portal"
import type { PortalProps } from "@yamada-ui/portal"
import { cx, runIfFunc } from "@yamada-ui/utils"
import type { FC, ReactNode } from "react"
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
import { AutocompleteIcon } from "./autocomplete-icon"
import type { AutocompleteListProps } from "./autocomplete-list"
import { AutocompleteList } from "./autocomplete-list"
import type { UseAutocompleteProps } from "./use-autocomplete"
import { useAutocomplete, useAutocompleteInput } from "./use-autocomplete"

interface AutocompleteOptions {
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
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for autocomplete content element.
   */
  contentProps?: Omit<MotionProps, "children">
  /**
   * Props for autocomplete list element.
   */
  listProps?: Omit<AutocompleteListProps, "children">
  /**
   * Props for autocomplete field element.
   */
  fieldProps?: Omit<AutocompleteFieldProps, "inputProps" | "children">
  /**
   * Props for autocomplete input element.
   */
  inputProps?: HTMLUIProps<"input">
  /**
   * Props for autocomplete icon element.
   */
  iconProps?: AutocompleteIconProps
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ isDisabled: true }'
   */
  portalProps?: Omit<PortalProps, "children">
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
  header?: ReactNode | FC<{ value: string | undefined; onClose: () => void }>
  /**
   * The footer of the autocomplete content element.
   */
  footer?: ReactNode | FC<{ value: string | undefined; onClose: () => void }>
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
export const Autocomplete = forwardRef<AutocompleteProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Autocomplete", props)
    let {
      className,
      defaultValue = "",
      color,
      h,
      height,
      minH,
      minHeight,
      containerProps,
      contentProps,
      listProps,
      fieldProps,
      inputProps,
      iconProps,
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
      ...rest
    } = useAutocomplete({ ...computedProps, defaultValue, children })

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
              className={cx("ui-autocomplete", className)}
              __css={css}
              {...getContainerProps(containerProps)}
            >
              <ui.div
                className="ui-autocomplete__inner"
                __css={{ position: "relative", ...styles.inner }}
              >
                <AutocompleteField
                  h={h}
                  minH={minH}
                  inputProps={inputProps}
                  {...getFieldProps(fieldProps, ref)}
                />

                <AutocompleteIcon {...iconProps} {...formControlProps} />
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

Autocomplete.displayName = "Autocomplete"
Autocomplete.__ui__ = "Autocomplete"

interface AutocompleteFieldProps
  extends HTMLUIProps,
    Pick<AutocompleteProps, "inputProps"> {}

const AutocompleteField = forwardRef<AutocompleteFieldProps, "input">(
  ({ className, h, minH, placeholder, inputProps, ...rest }, ref) => {
    const { label, inputValue, styles } = useAutocompleteContext()
    const { getInputProps } = useAutocompleteInput()

    const css: CSSUIObject = {
      pe: "2rem",
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
            w="100%"
            placeholder={placeholder}
            {...getInputProps(
              { ...inputProps, value: inputValue || label || "" },
              ref,
            )}
          />
        </ui.div>
      </PopoverTrigger>
    )
  },
)

AutocompleteField.displayName = "AutocompleteField"
AutocompleteField.__ui__ = "AutocompleteField"
