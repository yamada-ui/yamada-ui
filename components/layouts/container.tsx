import { useComponentStyle, omitThemeProps } from '../../functions'
import { ui, forwordRef } from '../../system'
import { HTMLUIProps, ThemeProps } from '../../types'
import { cx } from '../../utils'

type ContainerOptions = {
  centerContent?: boolean
}

export type ContainerProps = HTMLUIProps<'div'> & ThemeProps<'Container'> & ContainerOptions

export const Container = forwordRef<ContainerProps, 'div'>((props, ref) => {
  const css = useComponentStyle('Container', props)
  const { className, centerContent, ...rest } = omitThemeProps(props)

  const containerProps = centerContent
    ? {
        alignItems: 'center',
      }
    : {}

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
