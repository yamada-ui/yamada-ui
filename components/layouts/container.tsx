import { useMemo } from 'react'
import { useComponentStyle, omitThemeProps } from '../../functions'
import { ui, forwardRef } from '../../system'
import { HTMLUIProps, ThemeProps } from '../../types'
import { cx } from '../../utils'

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
    // @ts-ignore
    <ui.div
      ref={ref}
      className={cx('ui-container', className)}
      __css={css}
      {...containerProps}
      {...rest}
    />
  )
})
