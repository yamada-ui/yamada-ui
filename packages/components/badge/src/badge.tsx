import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
  omitThemeProps,
  CSSUIObject,
} from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'

export type BadgeProps = HTMLUIProps<'span'> & ThemeProps<'Badge'>

export const Badge = forwardRef<BadgeProps, 'span'>((props, ref) => {
  const [styles, mergedProps] = useComponentStyle('Badge', props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    ...styles,
  }

  return (
    <ui.span
      ref={ref}
      className={cx('ui-badge', className)}
      __css={css}
      {...rest}
    />
  )
})
