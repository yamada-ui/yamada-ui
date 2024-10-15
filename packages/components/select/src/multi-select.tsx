import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { PortalProps } from "@yamada-ui/portal"
import type {
  CSSProperties,
  FC,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react"
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
import { cx, handlerAll, runIfFunc } from "@yamada-ui/utils"
import { cloneElement, useMemo } from "react"
import { SelectClearIcon, SelectIcon } from "./select-icon"
import { SelectList } from "./select-list"
import {
  SelectDescendantsContextProvider,
  SelectProvider,
  useSelect,
  useSelectContext,
} from "./use-select"

interface MultiSelectOptions {
  /**
   * The custom display value to use.
   */
  component?: FC<{
    index: number
    label: string
    value: string
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
   * The footer of the multi select content element.
   */
  footer?: FC<{ value: string[] | undefined; onClose: () => void }> | ReactNode
  /**
   * The header of the multi select content element.
   */
  header?: FC<{ value: string[] | undefined; onClose: () => void }> | ReactNode
  /**
   * If `true`, display the multi select clear icon.
   *
   * @default true
   */
  isClearable?: boolean
  /**
   * The visual separator between each value.
   *
   * @default ','
   */
  separator?: string
  /**
   * Props for multi select clear icon element.
   */
  clearIconProps?: SelectIconProps
  /**
   * Props for multi select container element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
  /**
   * Props for multi select field element.
   */
  fieldProps?: Omit<MultiSelectFieldProps, "children">
  /**
   * Props for multi select icon element.
   */
  iconProps?: SelectIconProps
  /**
   * Props for multi select list element.
   */
  listProps?: Omit<SelectListProps, "children">
  /**
   * Props to be forwarded to the portal component.
   *
   * @default '{ isDisabled: true }'
   */
  portalProps?: Omit<PortalProps, "children">
}

export interface MultiSelectProps
  extends ThemeProps<"MultiSelect">,
    Omit<UseSelectProps<string[]>, "isEmpty" | "placeholderInOptions">,
    MultiSelectOptions {}

/**
 * `MultiSelect` is a component used for allowing users to select multiple values from a list of options.
 *
 * @see Docs https://yamada-ui.com/components/forms/multi-select
 */
export const MultiSelect = forwardRef<MultiSelectProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("MultiSelect", props)
  let {
    className,
    closeOnSelect = false,
    color,
    component,
    defaultValue = [],
    footer,
    h,
    header,
    height,
    isClearable = true,
    minH,
    minHeight,
    separator,
    clearIconProps,
    containerProps,
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
    placeholder,
    value,
    formControlProps,
    getContainerProps,
    getFieldProps,
    getPopoverProps,
    onClear,
    onClose,
    ...rest
  } = useSelect<string[]>({
    ...computedProps,
    closeOnSelect,
    defaultValue,
    placeholderInOptions: false,
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
      <SelectProvider value={{ ...rest, placeholder, styles, value, onClose }}>
        <Popover {...getPopoverProps()}>
          <ui.div
            className={cx("ui-multi-select", className)}
            __css={css}
            {...getContainerProps(containerProps)}
          >
            <ui.div
              className="ui-multi-select__inner"
              __css={{ position: "relative", ...styles.inner }}
            >
              <PopoverTrigger>
                <MultiSelectField
                  component={component}
                  h={h}
                  minH={minH}
                  separator={separator}
                  {...getFieldProps(fieldProps, ref)}
                />
              </PopoverTrigger>

              {isClearable && value.length ? (
                <SelectClearIcon
                  {...clearIconProps}
                  onClick={handlerAll(clearIconProps?.onClick, onClear)}
                  {...formControlProps}
                />
              ) : (
                <SelectIcon {...iconProps} {...formControlProps} />
              )}
            </ui.div>

            {!isEmpty ? (
              <Portal {...portalProps}>
                <SelectList
                  footer={runIfFunc(footer, { value, onClose })}
                  header={runIfFunc(header, { value, onClose })}
                  {...listProps}
                >
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

MultiSelect.displayName = "MultiSelect"
MultiSelect.__ui__ = "MultiSelect"

interface MultiSelectFieldProps
  extends HTMLUIProps,
    Pick<MultiSelectOptions, "component" | "separator"> {}

const MultiSelectField = forwardRef<MultiSelectFieldProps, "div">(
  (
    {
      className,
      component,
      h,
      isTruncated,
      lineClamp = 1,
      minH,
      separator = ",",
      ...rest
    },
    ref,
  ) => {
    const { label, placeholder, styles, value, onChange } = useSelectContext()

    const cloneChildren = useMemo(() => {
      if (!label?.length)
        return <ui.span lineClamp={lineClamp}>{placeholder}</ui.span>

      if (component) {
        return (
          <ui.span isTruncated={isTruncated} lineClamp={lineClamp}>
            {(label as string[]).map((label, index) => {
              const onRemove: MouseEventHandler<HTMLElement> = (e) => {
                e.stopPropagation()

                onChange(value[index] ?? "")
              }

              const el = component({
                index,
                label,
                value: value[index] ?? "",
                onRemove,
              }) as null | ReactElement

              const style: CSSProperties = {
                marginBlockEnd: "0.125rem",
                marginBlockStart: "0.125rem",
                marginInlineEnd: "0.25rem",
              }

              return el
                ? cloneElement(el as ReactElement, { key: index, style })
                : null
            })}
          </ui.span>
        )
      } else {
        return (
          <ui.span isTruncated={isTruncated} lineClamp={lineClamp}>
            {(label as string[]).map((value, index) => {
              const isLast = label.length === index + 1

              return (
                <ui.span
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: `${value}${!isLast ? separator : ""}`,
                  }}
                  display="inline-block"
                  me="0.25rem"
                />
              )
            })}
          </ui.span>
        )
      }
    }, [
      label,
      isTruncated,
      lineClamp,
      onChange,
      placeholder,
      separator,
      component,
      value,
    ])

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      h,
      minH,
      pe: "2rem",
      ...styles.field,
    }

    if (label?.length && component) css.py = "0.125rem"

    return (
      <ui.div
        ref={ref}
        className={cx("ui-multi-select__field", className)}
        __css={css}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    )
  },
)

MultiSelectField.displayName = "MultiSelectField"
MultiSelectField.__ui__ = "MultiSelectField"
