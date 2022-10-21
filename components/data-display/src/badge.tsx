import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
  omitThemeProps,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

export type BadgeProps = HTMLUIProps<'span'> & ThemeProps<'Badge'>

export const Badge = forwardRef<BadgeProps, 'span'>((props, ref) => {
  const css = useComponentStyle('Badge', props)
  const { className, ...rest } = omitThemeProps(props)

  return <ui.span ref={ref} className={cx('ui-badge', className)} __css={css} {...rest} />
})
