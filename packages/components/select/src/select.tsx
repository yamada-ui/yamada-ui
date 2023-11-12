import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import { Popover, PopoverTrigger } from "@yamada-ui/popover"
import { cx, getValidChildren } from "@yamada-ui/utils"
import { ReactElement } from "react"
import { SelectIcon, SelectIconProps } from "./select-icon"
import { SelectList, SelectListProps } from "./select-list"
import {
  useSelect,
  UseSelectProps,
  SelectDescendantsContextProvider,
  SelectProvider,
  useSelectContext,
} from "./use-select"
import { OptionGroup, Option, OptionProps } from "./"

type SelectBaseItem = Omit<OptionProps, "value" | "children"> & {
  label?: string
}

type SelectItemWithValue = SelectBaseItem & { value?: string }

type SelectItemWithItems = SelectBaseItem & { items?: SelectItemWithValue[] }

export type SelectItem = SelectItemWithValue | SelectItemWithItems

type SelectOptions = {
  /**
   * If provided, generate options based on items.
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
   * Props for select icon element.
   */
  iconProps?: SelectIconProps
}

export type SelectProps = ThemeProps<"Select"> &
  Omit<
    UseSelectProps<string>,
    "isEmpty" | "maxSelectedValues" | "omitSelectedValues"
  > &
  SelectOptions

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
    iconProps,
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

  h = h ?? height
  minH = minH ?? minHeight

  const css: CSSUIObject = {
    position: "relative",
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
            <PopoverTrigger>
              <SelectField h={h} minH={minH} {...getFieldProps({}, ref)} />
            </PopoverTrigger>

            <SelectIcon {...iconProps} {...formControlProps} />

            {!isEmpty ? (
              <SelectList {...listProps}>
                {!!placeholder && placeholderInOptions ? (
                  <Option>{placeholder}</Option>
                ) : null}

                {children ?? computedChildren}
              </SelectList>
            ) : null}
          </ui.div>
        </Popover>
      </SelectProvider>
    </SelectDescendantsContextProvider>
  )
})

type SelectFieldProps = HTMLUIProps<"div">

const SelectField = forwardRef<SelectFieldProps, "div">(
  ({ className, isTruncated = true, noOfLines, h, minH, ...rest }, ref) => {
    const { displayValue, placeholder, styles } = useSelectContext()

    const css: CSSUIObject = {
      paddingEnd: "2rem",
      h,
      minH,
      display: "flex",
      alignItems: "center",
      ...styles.field,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-select-field", className)}
        __css={css}
        {...rest}
      >
        <ui.span isTruncated={isTruncated} noOfLines={noOfLines}>
          {displayValue ?? placeholder}
        </ui.span>
      </ui.div>
    )
  },
)
