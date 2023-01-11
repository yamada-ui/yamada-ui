import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
  CSSUIProps,
} from '@yamada-ui/core'
import { useFormControlProps, FormControlOptions } from '@yamada-ui/form-control'
import { cx, omitObject } from '@yamada-ui/utils'

type TextareaOptions = {
  focusBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
  errorBorderColor?: CSSUIProps<'unresponsive'>['borderColor']
}

export type TextareaProps = Omit<HTMLUIProps<'textarea'>, 'disabled' | 'required' | 'readOnly'> &
  ThemeProps<'Textarea'> &
  TextareaOptions &
  FormControlOptions

export const Textarea = forwardRef<TextareaProps, 'textarea'>((props, ref) => {
  const styles = useComponentStyle('Textarea', props)
  let { className, rows, resize = 'none', ...rest } = omitThemeProps(props)

  rest = useFormControlProps(rest)

  const css: CSSUIObject = rows ? omitObject(styles, ['h', 'minH', 'height', 'minHeight']) : styles

  return (
    <ui.textarea
      ref={ref}
      className={cx('ui-textarea', className)}
      resize={resize}
      __css={css}
      {...rest}
    />
  )
})
