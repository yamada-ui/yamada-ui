import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useMultiComponentStyle,
  CSSUIProps,
} from '@yamada-ui/core'
import {
  useFormControlProps,
  FormControlOptions,
} from '@yamada-ui/form-control'
import { cx } from '@yamada-ui/utils'

type InputOptions = {
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  /**
   * The native HTML `size` attribute to be passed to the `input`
   */
  htmlSize?: number
}

export type InputProps = Omit<
  HTMLUIProps<'input'>,
  'disabled' | 'required' | 'readOnly' | 'size'
> &
  ThemeProps<'Input'> &
  InputOptions &
  FormControlOptions

export const Input = forwardRef<InputProps, 'input'>((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle('Input', props)
  let { className, htmlSize, ...rest } = omitThemeProps(mergedProps)

  rest = useFormControlProps(rest)

  const css: CSSUIObject = { ...styles.field }

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
