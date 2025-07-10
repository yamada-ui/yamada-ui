import type {
  CSSProperties,
  FC,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { PortalProps } from "../portal"
import type { SelectIconProps } from "./select-icon"
import type { SelectListProps } from "./select-list"
import type { UseSelectProps } from "./use-select"
import { cloneElement, useMemo } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx, handlerAll, runIfFunc } from "../../utils"
import { Popover, PopoverTrigger } from "../popover"
import { Portal } from "../portal"
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
   * If `true`, display the multi select clear icon.
   *
   * @default true
   */
  clearable?: boolean
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
   * @default '{ disabled: true }'
   */
  portalProps?: Omit<PortalProps, "children">
}

export interface MultiSelectProps
  extends ThemeProps<"MultiSelect">,
    Omit<UseSelectProps<string[]>, "placeholderInOptions">,
    MultiSelectOptions {}

/**
 * `MultiSelect` is a component used for allowing users to select multiple values from a list of options.
 *
 * @see https://yamada-ui.com/components/forms/multi-select
 */
export const MultiSelect = forwardRef<MultiSelectProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("MultiSelect", props)
  const {
    className,
    clearable = true,
    closeOnSelect = false,
    color,
    component,
    defaultValue = [],
    footer,
    h,
    header,
    height = h,
    minH,
    minHeight = minH,
    separator,
    clearIconProps,
    containerProps,
    fieldProps,
    iconProps,
    listProps,
    portalProps = { disabled: true },
    ...computedProps
  } = omitThemeProps(mergedProps)
  const {
    children,
    descendants,
    empty,
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

  return (
    <SelectDescendantsContextProvider value={descendants}>
      <SelectProvider value={{ ...rest, placeholder, styles, value, onClose }}>
        <Popover {...getPopoverProps()}>
          <ui.div
            className={cx("ui-multi-select", className)}
            __css={{
              color,
              ...styles.container,
            }}
            {...getContainerProps(containerProps)}
          >
            <ui.div
              className="ui-multi-select__inner"
              __css={{ position: "relative", ...styles.inner }}
            >
              <PopoverTrigger>
                <MultiSelectField
                  component={component}
                  height={height}
                  minHeight={minHeight}
                  separator={separator}
                  {...getFieldProps(fieldProps, ref)}
                />
              </PopoverTrigger>

              {clearable && value.length ? (
                <SelectClearIcon
                  {...clearIconProps}
                  onClick={handlerAll(clearIconProps?.onClick, onClear)}
                  {...formControlProps}
                />
              ) : (
                <SelectIcon {...iconProps} {...formControlProps} />
              )}
            </ui.div>

            {!empty ? (
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
      isTruncated,
      lineClamp = 1,
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
                ? cloneElement<any>(el as ReactElement, { key: index, style })
                : null
            })}
          </ui.span>
        )
      } else {
        return (
          <ui.span isTruncated={isTruncated} lineClamp={lineClamp}>
            {(label as string[]).map((value, index) => {
              const last = label.length === index + 1

              return (
                <ui.span
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: `${value}${!last ? separator : ""}`,
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

    if (label?.length && component) css.py = "0.125rem"

    return (
      <ui.div
        ref={ref}
        className={cx("ui-multi-select__field", className)}
        __css={styles.field}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    )
  },
)

MultiSelectField.displayName = "MultiSelectField"
MultiSelectField.__ui__ = "MultiSelectField"
