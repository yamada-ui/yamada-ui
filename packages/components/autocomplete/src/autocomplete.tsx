import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import type { PortalProps } from "@yamada-ui/portal"
import type { FC, ReactNode } from "react"
import type { AutocompleteCreateProps } from "./autocomplete-create"
import type { AutocompleteEmptyProps } from "./autocomplete-empty"
import type { AutocompleteIconProps } from "./autocomplete-icon"
import type { AutocompleteListProps } from "./autocomplete-list"
import type { UseAutocompleteProps } from "./use-autocomplete"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { Popover, PopoverTrigger } from "@yamada-ui/popover"
import { Portal } from "@yamada-ui/portal"
import { cx, runIfFunc } from "@yamada-ui/utils"
import {
  AutocompleteDescendantsContextProvider,
  AutocompleteProvider,
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
   * @default '{ isDisabled: true }'
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
export const Autocomplete = forwardRef<AutocompleteProps, "input">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("Autocomplete", props)
    let {
      className,
      children,
      color,
      defaultValue = "",
      footer,
      h,
      header,
      height,
      minH,
      minHeight,
      containerProps,
      contentProps,
      createProps,
      emptyProps,
      fieldProps,
      iconProps,
      inputProps,
      listProps,
      portalProps = { isDisabled: true },
      ...computedProps
    } = omitThemeProps(mergedProps)

    const {
      allowCreate,
      computedChildren,
      descendants,
      inputValue,
      isEmpty,
      value,
      formControlProps,
      getContainerProps,
      getFieldProps,
      getPopoverProps,
      onClose,
      ...rest
    } = useAutocomplete({ ...computedProps, children, defaultValue })

    h ??= height
    minH ??= minHeight

    const css: CSSUIObject = {
      color,
      h: "fit-content",
      w: "100%",
      ...styles.container,
    }

    return (
      <AutocompleteDescendantsContextProvider value={descendants}>
        <AutocompleteProvider
          value={{
            ...rest,
            allowCreate,
            inputValue,
            isEmpty,
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
                    footer={runIfFunc(footer, { value, onClose })}
                    header={runIfFunc(header, { value, onClose })}
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
                    footer={runIfFunc(footer, { value, onClose })}
                    header={runIfFunc(header, { value, onClose })}
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
  },
)

AutocompleteField.displayName = "AutocompleteField"
AutocompleteField.__ui__ = "AutocompleteField"
