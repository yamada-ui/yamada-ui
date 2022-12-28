import { ui, CSSUIObject, forwardRef, HTMLUIProps } from '@yamada-ui/core'
import { PopoverTrigger } from '@yamada-ui/overlay'
import { cx } from '@yamada-ui/utils'
import { useSelect } from './'

export type SelectFieldProps = HTMLUIProps<'input'>

export const SelectField = forwardRef<SelectFieldProps, 'input'>(({ className, ...rest }, ref) => {
  const { getFieldProps, styles } = useSelect()

  const css: CSSUIObject = { ...styles.field }

  return (
    <PopoverTrigger>
      <ui.input
        className={cx('ui-select-field', className)}
        {...getFieldProps(rest, ref)}
        __css={css}
      />
    </PopoverTrigger>
  )
})
