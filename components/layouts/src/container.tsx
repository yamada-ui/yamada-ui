import { useMemo } from 'react'
import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
  omitThemeProps,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

type ContainerOptions = {
  centerContent?: boolean
}

export type ContainerProps = HTMLUIProps<'div'> & ThemeProps<'Container'> & ContainerOptions

export const Container = forwardRef<ContainerProps, 'div'>((props, ref) => {
  const css = useComponentStyle('Container', props)
  const { className, centerContent, ...rest } = omitThemeProps(props)

  const containerProps = useMemo(
    () =>
      centerContent
        ? {
            alignItems: 'center',
          }
        : {},
    [centerContent],
  )

  return (
    <ui.div
      ref={ref}
      className={cx('ui-container', className)}
      __css={css}
      {...containerProps}
      {...rest}
    />
  )
})
