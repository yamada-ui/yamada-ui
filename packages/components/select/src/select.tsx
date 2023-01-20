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
import { cx, getValidChildren, isArray } from '@yamada-ui/utils'
import { ReactElement } from 'react'
import { SelectIcon, SelectIconProps } from './select-icon'
import { SelectList, SelectListProps } from './select-list'
import {
  Value,
  useSelect,
  UseSelectProps,
  SelectDescendantsContextProvider,
  SelectProvider,
  useSelectContext,
} from './use-select'
import { OptionGroup, Option, OptionProps } from './'

export type UIOption = Omit<OptionProps, 'value'> & {
  label?: string
  value?: Value | UIOption[]
}

type SelectOptions = {
  data?: UIOption[]
  focusBorderColor?: string
  errorBorderColor?: string
  container?: Omit<HTMLUIProps<'div'>, 'children'>
  list?: Omit<SelectListProps, 'children'>
  icon?: SelectIconProps
}

export type SelectProps = ThemeProps<'Select'> &
  Omit<UseSelectProps<string | number>, 'isEmpty' | 'maxSelectedValues' | 'omitSelectedValues'> &
  SelectOptions

export const Select = forwardRef<SelectProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('Select', props)
  let {
    className,
    placeholder,
    defaultValue = '',
    placeholderInOptions = true,
    data = [],
    isTruncated = true,
    color,
    h,
    height,
    minH,
    minHeight,
    container,
    list,
    icon,
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

  const isEmpty =
    !validChildren.length && !computedChildren.length && !(!!placeholder && placeholderInOptions)

  const {
    descendants,
    formControlProps,
    getPopoverProps,
    getContainerProps,
    getFieldProps,
    ...rest
  } = useSelect({ ...computedProps, placeholder, placeholderInOptions, defaultValue, isEmpty })

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
      <SelectProvider value={{ ...rest, placeholder, placeholderInOptions, styles }}>
        <Popover {...getPopoverProps()}>
          <ui.div className='ui-select-container' __css={css} {...getContainerProps(container)}>
            <PopoverTrigger>
              <SelectField
                isTruncated={isTruncated}
                h={h}
                minH={minH}
                {...getFieldProps({}, ref)}
              />
            </PopoverTrigger>

            <SelectIcon {...icon} {...formControlProps} />

            {!isEmpty ? (
              <SelectList {...list}>
                {!!placeholder && placeholderInOptions ? <Option>{placeholder}</Option> : null}

                {children ?? computedChildren}
              </SelectList>
            ) : null}
          </ui.div>
        </Popover>
      </SelectProvider>
    </SelectDescendantsContextProvider>
  )
})

type SelectFieldProps = HTMLUIProps<'div'>

const SelectField = forwardRef<SelectFieldProps, 'div'>(
  ({ className, isTruncated, h, minH, ...rest }, ref) => {
    const { displayValue, placeholder, styles } = useSelectContext()

    const css: CSSUIObject = {
      paddingEnd: '2rem',
      h,
      minH,
      display: 'flex',
      alignItems: 'center',
      ...styles.field,
    }

    return (
      <ui.div ref={ref} className={cx('ui-select-field', className)} __css={css} {...rest}>
        <ui.span isTruncated={isTruncated}>{displayValue ?? placeholder}</ui.span>
      </ui.div>
    )
  },
)
