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
import { cx, getValidChildren } from "@yamada-ui/utils"
import type { ReactElement, ReactNode } from "react"
import type { SelectIconProps } from "./select-icon"
import { SelectIcon } from "./select-icon"
import type { SelectListProps } from "./select-list"
import { SelectList } from "./select-list"
import type { UseSelectProps } from "./use-select"
import {
  useSelect,
  SelectDescendantsContextProvider,
  SelectProvider,
  useSelectContext,
} from "./use-select"
import type { OptionProps } from "./"
import { OptionGroup, Option } from "./"

type SelectBaseItem = Omit<OptionProps, "value" | "children">

type SelectItemWithValue = SelectBaseItem & {
  label?: ReactNode
  value?: string
}

type SelectItemWithItems = SelectBaseItem & {
  label?: string
  items?: SelectItemWithValue[]
}

export type SelectItem = SelectItemWithValue | SelectItemWithItems

type SelectOptions = {
  /**
   * If provided, generate options based on items.
   *
   * @default '[]'
   */
  items?: SelectItem[]
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: string
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: string
  /**
   * Props for select container element.
   */
  containerProps?: Omit<HTMLUIProps<"div">, "children">
  /**
   * Props for select list element.
   */
  listProps?: Omit<SelectListProps, "children">
  /**
   * Props for select field element.
   */
  fieldProps?: Omit<SelectFieldProps, "children">
  /**
   * Props for select icon element.
   */
  iconProps?: SelectIconProps
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ isDisabled: true }'
   */
  portalProps?: Omit<PortalProps, "children">
}

export type SelectProps = ThemeProps<"Select"> &
  Omit<
    UseSelectProps<string>,
    "isEmpty" | "maxSelectValues" | "omitSelectedValues"
  > &
  SelectOptions

/**
 * `Select` is a component used for allowing a user to choose one option from a list.
 *
 * @see Docs https://yamada-ui.com/components/forms/select
 */
export const Select = forwardRef<SelectProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Select", props)
  let {
    className,
    placeholder,
    defaultValue = "",
    placeholderInOptions = true,
    items = [],
    color,
    h,
    height,
    minH,
    minHeight,
    containerProps,
    listProps,
    fieldProps,
    iconProps,
    portalProps = { isDisabled: true },
    children,
    ...computedProps
  } = omitThemeProps(mergedProps)

  const validChildren = getValidChildren(children)
  let computedChildren: ReactElement[] = []

  if (!validChildren.length && items.length) {
    computedChildren = items
      .map((item, i) => {
        if ("value" in item) {
          const { label, value, ...props } = item

          return (
            <Option key={i} value={value} {...props}>
              {label}
            </Option>
          )
        } else if ("items" in item) {
          const { label, items = [], ...props } = item

          return (
            <OptionGroup
              key={i}
              label={label ?? ""}
              {...(props as HTMLUIProps<"ul">)}
            >
              {items.map(({ label, value, ...props }, i) => (
                <Option key={i} value={value} {...props}>
                  {label}
                </Option>
              ))}
            </OptionGroup>
          )
        }
      })
      .filter(Boolean) as ReactElement[]
  }

  const isEmpty =
    !validChildren.length &&
    !computedChildren.length &&
    !(!!placeholder && placeholderInOptions)

  const {
    descendants,
    formControlProps,
    getPopoverProps,
    getContainerProps,
    getFieldProps,
    ...rest
  } = useSelect({
    ...computedProps,
    placeholder,
    placeholderInOptions,
    defaultValue,
    isEmpty,
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
    <SelectDescendantsContextProvider value={descendants}>
      <SelectProvider
        value={{ ...rest, placeholder, placeholderInOptions, styles }}
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
                <SelectList {...listProps}>
                  {!!placeholder && placeholderInOptions ? (
                    <Option>{placeholder}</Option>
                  ) : null}

                  {children ?? computedChildren}
                </SelectList>
              </Portal>
            ) : null}
          </ui.div>
        </Popover>
      </SelectProvider>
    </SelectDescendantsContextProvider>
  )
})

type SelectFieldProps = HTMLUIProps<"div">

const SelectField = forwardRef<SelectFieldProps, "div">(
  ({ className, isTruncated = true, lineClamp, h, minH, ...rest }, ref) => {
    const { label, placeholder, styles } = useSelectContext()

    const css: CSSUIObject = {
      pe: "2rem",
      h,
      minH,
      display: "flex",
      alignItems: "center",
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
          isTruncated={isTruncated}
          lineClamp={lineClamp}
          dangerouslySetInnerHTML={{
            __html: label ?? placeholder ?? "",
          }}
        ></ui.span>
      </ui.div>
    )
  },
)
