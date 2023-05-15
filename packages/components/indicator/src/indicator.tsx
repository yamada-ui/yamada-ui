import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
} from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'

type IndicatorOptions = {}

export type IndicatorProps = HTMLUIProps<'div'> & ThemeProps<'Indicator'> & IndicatorOptions

export const Indicator = forwardRef<IndicatorProps, 'div'>((props, ref) => {
  const [styles, mergedProps] = useComponentStyle('Indicator', props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles,
  }

  return <ui.div ref={ref} className={cx('ui-indicator', className)} __css={css} {...rest} />
})
