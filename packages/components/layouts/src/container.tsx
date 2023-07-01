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
import { useMemo } from 'react'

type ContainerOptions = {
  /**
   * If `true`, container will center its children regardless of their width.
   *
   * @default false
   */
  centerContent?: boolean
}

export type ContainerProps = HTMLUIProps<'section'> & ThemeProps<'Container'> & ContainerOptions

export const Container = forwardRef<ContainerProps, 'section'>((props, ref) => {
  const [styles, mergedProps] = useComponentStyle('Container', props)
  const { className, centerContent, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = useMemo(
    () => ({
      alignItems: centerContent ? 'center' : undefined,
      ...styles,
    }),
    [centerContent, styles],
  )

  return <ui.section ref={ref} className={cx('ui-container', className)} __css={css} {...rest} />
})
