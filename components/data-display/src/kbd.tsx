import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
  omitThemeProps,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

export type KbdProps = HTMLUIProps<'kbd'> & ThemeProps<'Kbd'>

export const Kbd = forwardRef<KbdProps, 'kbd'>((props, ref) => {
  const css = useComponentStyle('Kbd', props)
  const { className, ...rest } = omitThemeProps(props)

  return <ui.kbd ref={ref} className={cx('ui-kbd', className)} __css={css} {...rest} />
})
