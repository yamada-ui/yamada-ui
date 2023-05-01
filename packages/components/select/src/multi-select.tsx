import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import { Popover, PopoverTrigger } from '@yamada-ui/popover'
import { cx, getValidChildren, handlerAll, isArray } from '@yamada-ui/utils'
import { cloneElement, CSSProperties, FC, MouseEventHandler, ReactElement, useMemo } from 'react'
import { SelectIcon, SelectClearIcon, SelectIconProps } from './select-icon'
import { SelectList, SelectListProps } from './select-list'
import {
  useSelect,
  UseSelectProps,
  SelectDescendantsContextProvider,
  SelectProvider,
  useSelectContext,
} from './use-select'
import { OptionGroup, Option, UIOption } from './'

type MultiSelectOptions = {
  data?: UIOption[]
  component?: FC<{
    value: string | number
    displayValue: string
    index: number
    onRemove: MouseEventHandler<HTMLElement>
  }>
  separator?: string
  isClearable?: boolean
  focusBorderColor?: string
  errorBorderColor?: string
  container?: Omit<HTMLUIProps<'div'>, 'children'>
  list?: Omit<SelectListProps, 'children'>
  icon?: SelectIconProps
  clearIcon?: SelectIconProps
}

export type MultiSelectProps = ThemeProps<'Select'> &
  Omit<UseSelectProps<string[]>, 'placeholderInOptions' | 'isEmpty'> &
  MultiSelectOptions

export const MultiSelect = forwardRef<MultiSelectProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('Select', props)
  let {
    className,
    defaultValue = [],
    component,
    separator,
    isClearable = true,
    data = [],
    color,
    h,
    height,
    minH,
    minHeight,
    closeOnSelect = false,
    container,
    list,
    icon,
    clearIcon,
    children,
    ...computedProps
  } = omitThemeProps(props)

  const validChildren = getValidChildren(children)
  let computedChildren: ReactElement[] = []

  if (!validChildren.length && data.length) {
    computedChildren = data.map(({ label, value, ...props }, i) => {
      if (!isArray(value)) {
        return (
          <Option key={i} value={value} {...props}>
            {label}
          </Option>
        )
      } else {
        return (
          <OptionGroup key={i} label={label as string} {...(props as HTMLUIProps<'ul'>)}>
            {value.map(({ label, value, ...props }, i) =>
              !isArray(value) ? (
                <Option key={i} value={value} {...props}>
                  {label}
                </Option>
              ) : null,
            )}
          </OptionGroup>
        )
      }
    })
  }

  let isEmpty = !validChildren.length && !computedChildren.length

  const {
    value,
    descendants,
    formControlProps,
    getPopoverProps,
    getContainerProps,
    getFieldProps,
    placeholder,
    onClear,
    ...rest
  } = useSelect<string[]>({
    ...computedProps,
    defaultValue,
    placeholderInOptions: false,
    closeOnSelect,
    isEmpty,
  })

  h = h ?? height
  minH = minH ?? minHeight

  const css: CSSUIObject = {
    position: 'relative',
    w: '100%',
    h: 'fit-content',
    color,
    ...styles.container,
  }

  return (
    <SelectDescendantsContextProvider value={descendants}>
      <SelectProvider value={{ ...rest, value, placeholder, styles }}>
        <Popover {...getPopoverProps()}>
          <ui.div className='ui-multi-select' __css={css} {...getContainerProps(container)}>
            <PopoverTrigger>
              <MultiSelectField
                component={component}
                separator={separator}
                h={h}
                minH={minH}
                {...getFieldProps({}, ref)}
              />
            </PopoverTrigger>

            {isClearable && value.length ? (
              <SelectClearIcon
                {...clearIcon}
                onClick={handlerAll(clearIcon?.onClick, onClear)}
                {...formControlProps}
              />
            ) : (
              <SelectIcon {...icon} {...formControlProps} />
            )}

            {!isEmpty ? <SelectList {...list}>{children ?? computedChildren}</SelectList> : null}
          </ui.div>
        </Popover>
      </SelectProvider>
    </SelectDescendantsContextProvider>
  )
})

type MultiSelectFieldProps = HTMLUIProps<'div'> &
  Pick<MultiSelectOptions, 'component' | 'separator'>

const MultiSelectField = forwardRef<MultiSelectFieldProps, 'div'>(
  (
    { className, component, separator = ',', isTruncated, noOfLines = 1, h, minH, ...rest },
    ref,
  ) => {
    const { value, displayValue, onChange, placeholder, styles } = useSelectContext()

    const cloneChildren = useMemo(() => {
      if (!displayValue?.length) return <ui.span noOfLines={noOfLines}>{placeholder}</ui.span>

      if (component) {
        return (
          <ui.span isTruncated={isTruncated} noOfLines={noOfLines}>
            {(displayValue as string[]).map((displayValue, index) => {
              const onRemove: MouseEventHandler<HTMLElement> = (e) => {
                e.stopPropagation()

                onChange(value[index])
              }

              const el = component({
                value: value[index],
                displayValue,
                index,
                onRemove,
              })

              const style: CSSProperties = {
                marginBlockStart: '0.125rem',
                marginBlockEnd: '0.125rem',
                marginInlineEnd: '0.25rem',
              }

              return el ? cloneElement(el, { style }) : null
            })}
          </ui.span>
        )
      } else {
        return (
          <ui.span isTruncated={isTruncated} noOfLines={noOfLines}>
            {(displayValue as string[]).map((value, index) => {
              const isLast = displayValue.length === index + 1

              return (
                <ui.span key={index} display='inline-block' me='0.25rem'>
                  {value}
                  {!isLast ? separator : null}
                </ui.span>
              )
            })}
          </ui.span>
        )
      }
    }, [displayValue, isTruncated, noOfLines, onChange, placeholder, separator, component, value])

    const css: CSSUIObject = {
      paddingEnd: '2rem',
      h,
      minH,
      display: 'flex',
      alignItems: 'center',
      ...styles.field,
    }

    return (
      <ui.div
        ref={ref}
        className={cx('ui-multi-select-field', className)}
        __css={css}
        py={displayValue?.length && component ? '0.125rem' : undefined}
        {...rest}
      >
        {cloneChildren}
      </ui.div>
    )
  },
)
