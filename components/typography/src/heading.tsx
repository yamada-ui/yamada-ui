import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
} from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'

export type HeadingProps = HTMLUIProps<'h1'> & ThemeProps<'Heading'>

export const Heading = forwardRef<HeadingProps, 'h1'>((props, ref) => {
  const css = useComponentStyle('Heading', props)
  const { className, ...rest } = omitThemeProps(props)

  return <ui.h1 ref={ref} className={cx('ui-heading', className)} __css={css} {...rest} />
})
