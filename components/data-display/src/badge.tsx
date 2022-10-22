import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
  omitThemeProps,
  CSSUIObject,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

export type BadgeProps = HTMLUIProps<'span'> & ThemeProps<'Badge'>

export const Badge = forwardRef<BadgeProps, 'span'>((props, ref) => {
  const style = useComponentStyle('Badge', props)
  const { className, ...rest } = omitThemeProps(props)

  const css: CSSUIObject = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    ...style,
  }

  return <ui.span ref={ref} className={cx('ui-badge', className)} __css={css} {...rest} />
})
