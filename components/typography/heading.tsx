import { useComponentStyle, omitThemeProps } from '../../functions'
import { ui, forwardRef } from '../../system'
import { HTMLUIProps, ThemeProps } from '../../types'
import { cx } from '../../utils'

export type HeadingProps = HTMLUIProps<'h1'> & ThemeProps<'Heading'>

export const Heading = forwardRef<HeadingProps, 'h1'>((props, ref) => {
  const css = useComponentStyle('Heading', props)
  const { className, ...rest } = omitThemeProps(props)

  // @ts-ignore
  return <ui.h1 ref={ref} className={cx('ui-heading', className)} __css={css} {...rest} />
})
