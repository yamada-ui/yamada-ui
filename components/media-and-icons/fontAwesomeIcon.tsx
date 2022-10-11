import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { css as createCSS } from '../../functions'
import { useTheme } from '../../hooks'
import { forwardRef } from '../../system'
import { HTMLUIProps, CSSUIProps } from '../../types'
import { cx } from '../../utils'

type FontAwesomeIconOptions = {
  className?: string
  icon: IconDefinition | IconProp
  size?: CSSUIProps['boxSize']
}

export type FontAwesomeIconProps = HTMLUIProps<'svg'> & FontAwesomeIconOptions

export const FontAwesomeIcon = forwardRef<FontAwesomeIconProps, 'svg'>(
  ({ className, icon, size: boxSize, ...rest }, ref) => {
    const theme = useTheme()

    const css = createCSS({
      display: 'inline-block',
      flexShrink: 0,
      w: '1em',
      h: '1em',
      lineHeight: '1em',
      boxSize,
      ...rest,
    })(theme)

    return <Icon ref={ref} icon={icon} className={cx('ui-fontawesome-icon', className)} css={css} />
  },
)
