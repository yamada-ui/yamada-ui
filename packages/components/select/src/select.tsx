import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import type { PortalProps } from "@yamada-ui/portal"
import type { FC, ReactNode } from "react"
import type { SelectIconProps } from "./select-icon"
import type { SelectListProps } from "./select-list"
import type { UseSelectProps } from "./use-select"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { Popover, PopoverTrigger } from "@yamada-ui/popover"
import { Portal } from "@yamada-ui/portal"
import { cx, runIfFunc } from "@yamada-ui/utils"
import { Option } from "./option"
import { SelectIcon } from "./select-icon"
import { SelectList } from "./select-list"
import {
  SelectDescendantsContextProvider,
  SelectProvider,
  useSelect,
  useSelectContext,
} from "./use-select"

interface SelectOptions {
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * The footer of the select content element.
   */
  footer?: FC<{ value: string | undefined; onClose: () => void }> | ReactNode
  /**
   * The header of the select content element.
   */
  header?: FC<{ value: string | undefined; onClose: () => void }> | ReactNode
  /**
   * Props for select container element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for select content element.
   */
  contentProps?: Omit<MotionProps, "children">
  /**
   * Props for select field element.
   */
  fieldProps?: Omit<SelectFieldProps, "children">
  /**
   * Props for select icon element.
   */
  iconProps?: SelectIconProps
  /**
   * Props for select list element.
   */
  listProps?: Omit<SelectListProps, "children">
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ isDisabled: true }'
   */
  portalProps?: Omit<PortalProps, "children">
}

export type SelectProps = Omit<
  UseSelectProps,
  "isEmpty" | "maxSelectValues" | "omitSelectedValues"
> &
  SelectOptions &
  ThemeProps<"Select">

/**
 * `Select` is a component used for allowing a user to choose one option from a list.
 *
 * @see Docs https://yamada-ui.com/components/forms/select
 */
export const Select = forwardRef<SelectProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Select", props)
  let {
    className,
    color,
    defaultValue = "",
    footer,
    h,
    header,
    height,
    minH,
    minHeight,
    placeholder,
    placeholderInOptions = true,
    containerProps,
    contentProps,
    fieldProps,
    iconProps,
    listProps,
    portalProps = { isDisabled: true },
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {
    children,
    descendants,
    isEmpty,
    value,
    formControlProps,
    getContainerProps,
    getFieldProps,
    getPopoverProps,
    onClose,
    ...rest
  } = useSelect({
    ...computedProps,
    defaultValue,
    placeholder,
    placeholderInOptions,
  })

  h ??= height
  minH ??= minHeight

  const css: CSSUIObject = {
    color,
    h: "fit-content",
    w: "100%",
    ...styles.container,
  }

  return (
    <SelectDescendantsContextProvider value={descendants}>
      <SelectProvider
        value={{
          ...rest,
          placeholder,
          placeholderInOptions,
          styles,
          value,
          onClose,
        }}
      >
        <Popover {...getPopoverProps()}>
          <ui.div
            className={cx("ui-select", className)}
            __css={css}
            {...getContainerProps(containerProps)}
          >
            <ui.div
              className="ui-select__inner"
              __css={{ position: "relative", ...styles.inner }}
            >
              <PopoverTrigger>
                <SelectField
                  h={h}
                  minH={minH}
                  {...getFieldProps(fieldProps, ref)}
                />
              </PopoverTrigger>

              <SelectIcon {...iconProps} {...formControlProps} />
            </ui.div>

            {!isEmpty ? (
              <Portal {...portalProps}>
                <SelectList
                  footer={runIfFunc(footer, { value, onClose })}
                  header={runIfFunc(header, { value, onClose })}
                  contentProps={contentProps}
                  {...listProps}
                >
                  {!!placeholder && placeholderInOptions ? (
                    <Option>{placeholder}</Option>
                  ) : null}

                  {children}
                </SelectList>
              </Portal>
            ) : null}
          </ui.div>
        </Popover>
      </SelectProvider>
    </SelectDescendantsContextProvider>
  )
})

Select.displayName = "Select"
Select.__ui__ = "Select"

interface SelectFieldProps extends HTMLUIProps {}

const SelectField = forwardRef<SelectFieldProps, "div">(
  ({ className, h, isTruncated = true, lineClamp, minH, ...rest }, ref) => {
    const { label, placeholder, styles } = useSelectContext()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      h,
      minH,
      pe: "2rem",
      ...styles.field,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-select__field", className)}
        __css={css}
        {...rest}
      >
        <ui.span
          dangerouslySetInnerHTML={{
            __html: label ?? placeholder ?? "",
          }}
          isTruncated={isTruncated}
          lineClamp={lineClamp}
        />
      </ui.div>
    )
  },
)

SelectField.displayName = "SelectField"
SelectField.__ui__ = "SelectField"
