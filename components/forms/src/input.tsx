import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useMultiComponentStyle,
  CSSUIProps,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { useFormControlProps, FormControlOptions } from './'

type InputOptions = {
  focusBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  errorBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  htmlSize?: number
}

export type InputProps = Omit<HTMLUIProps<'input'>, 'disabled' | 'required' | 'readOnly' | 'size'> &
  ThemeProps<'Input'> &
  InputOptions &
  FormControlOptions

export const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  const styles = useMultiComponentStyle('Input', props)
  let { className, htmlSize, ...rest } = omitThemeProps(props)

  rest = useFormControlProps(rest)

  const css: CSSUIObject = { ...styles.container }

  return (
    <ui.input
      ref={ref}
      className={cx('ui-input', className)}
      size={htmlSize}
      __css={css}
      {...rest}
    />
  )
})
