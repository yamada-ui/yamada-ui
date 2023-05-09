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

type SkeletonOptions = {}

export type SkeletonProps = HTMLUIProps<'div'> & ThemeProps<'Skeleton'> & SkeletonOptions

export const Skeleton = forwardRef<SkeletonProps, 'div'>((props, ref) => {
  const styles = useComponentStyle('Skeleton', props)
  const { className, ...rest } = omitThemeProps(props)

  const css: CSSUIObject = {
    ...styles,
  }

  return <ui.div ref={ref} className={cx('ui-skeleton', className)} __css={css} {...rest} />
})
