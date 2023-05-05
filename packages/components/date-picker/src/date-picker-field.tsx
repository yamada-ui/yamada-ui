import { ui, CSSUIObject, forwardRef, HTMLUIProps } from '@yamada-ui/core'
import { PopoverTrigger } from '@yamada-ui/popover'
import { cx } from '@yamada-ui/utils'
import { useDatePickerContext, useDatePickerInput } from './use-date-picker'

type DatePickerFieldOptions = {
  inputProps?: HTMLUIProps<'input'>
}

export type DatePickerFieldProps = HTMLUIProps<'div'> & DatePickerFieldOptions

export const DatePickerField = forwardRef<DatePickerFieldProps, 'div'>(
  ({ className, h, minH, inputProps, ...rest }, ref) => {
    const { styles, getFieldProps } = useDatePickerContext()
    const { getInputProps } = useDatePickerInput()

    const css: CSSUIObject = {
      paddingEnd: '2rem',
      h,
      minH,
      display: 'flex',
      alignItems: 'center',
      ...styles.field,
      cursor: 'text',
      ...styles.feild,
    }

    return (
      <PopoverTrigger>
        <ui.div
          className={cx('ui-date-picker-field', className)}
          __css={css}
          {...getFieldProps(rest)}
        >
          <ui.input
            className='ui-date-picker-input'
            display='inline-block'
            w='full'
            {...getInputProps(inputProps, ref)}
          />
        </ui.div>
      </PopoverTrigger>
    )
  },
)
