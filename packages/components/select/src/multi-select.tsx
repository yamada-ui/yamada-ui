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
import { FC, ReactElement, useCallback, useMemo } from 'react'
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

type Format = (value: string, index: number) => string

type MultiSelectOptions = {
  data?: UIOption[]
  tag?: FC<{ value: string; index: number }>
  format?: Format
  separator?: string
  isClearable?: boolean
  focusBorderColor?: string
  errorBorderColor?: string
  list?: Omit<SelectListProps, 'children'>
  icon?: SelectIconProps
  clearIcon?: SelectIconProps
}

export type MultiSelectProps = ThemeProps<'Select'> &
  Omit<UseSelectProps<(string | number)[]>, 'placeholderInOptions' | 'isEmpty'> &
  MultiSelectOptions

export const MultiSelect = forwardRef<MultiSelectProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('Select', props)
  let {
    className,
    defaultValue = [],
    tag,
    format,
    separator,
    isClearable = true,
    isTruncated = true,
    data = [],
    color,
    h,
    height,
    minH,
    minHeight,
    closeOnSelect = false,
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

  const isEmpty = !validChildren.length && !computedChildren.length

  const {
    value,
    setValue,
    setDisplayValue,
    descendants,
    formControlProps,
    getPopoverProps,
    getContainerProps,
    getFieldProps,
    placeholder,
    ...rest
  } = useSelect<(string | number)[]>({
    ...computedProps,
    defaultValue,
    placeholderInOptions: false,
    closeOnSelect,
    isEmpty,
  })

  h = h ?? height
  minH = minH ?? minHeight

  const onClear = useCallback(() => {
    setValue([])
    setDisplayValue(undefined)
  }, [setDisplayValue, setValue])

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
          <ui.div className='ui-multi-select-container' __css={css} {...getContainerProps()}>
            <PopoverTrigger>
              <MultiSelectField
                tag={tag}
                format={format}
                separator={separator}
                isTruncated={isTruncated}
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
  Pick<MultiSelectOptions, 'tag' | 'format' | 'separator'>

const defaultFormat: Format = (value) => value

const MultiSelectField = forwardRef<MultiSelectFieldProps, 'div'>(
  (
    { className, tag, format = defaultFormat, separator = ', ', isTruncated, h, minH, ...rest },
    ref,
  ) => {
    const { displayValue, placeholder, styles } = useSelectContext()

    const cloneChildren = useMemo(() => {
      if (!displayValue?.length) return <ui.span isTruncated={isTruncated}>{placeholder}</ui.span>

      if (tag) {
        return (
          <ui.span isTruncated={isTruncated}>
            {(displayValue as string[]).map((value, index) => tag({ value, index }))}
          </ui.span>
        )
      } else {
        return (
          <ui.span isTruncated={isTruncated}>
            {(displayValue as string[]).map(format).join(separator)}
          </ui.span>
        )
      }
    }, [displayValue, format, isTruncated, placeholder, separator, tag])

    const css: CSSUIObject = {
      paddingEnd: '2rem',
      h,
      minH,
      display: 'flex',
      alignItems: 'center',
      ...styles.field,
    }

    return (
      <ui.div ref={ref} className={cx('ui-multi-select-field', className)} __css={css} {...rest}>
        <ui.span>{cloneChildren}</ui.span>
      </ui.div>
    )
  },
)
