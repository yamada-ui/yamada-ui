import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { ui, forwardRef, HTMLUIProps, CSSUIProps } from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { useMemo } from 'react'
type FontAwesomeIconOptions = {
  className?: string
  icon: IconDefinition | IconProp
  size?: CSSUIProps['fontSize']
}

export type FontAwesomeIconProps = HTMLUIProps<'svg'> & FontAwesomeIconOptions

export const FontAwesomeIcon = forwardRef<FontAwesomeIconProps, 'svg'>(
  ({ className, icon, size: fontSize, ...rest }, ref) => {
    const css = useMemo(
      () => ({
        w: '1em',
        h: '1em',
        display: 'inline-block',
        lineHeight: '1em',
        flexShrink: 0,
        fontSize,
      }),
      [fontSize],
    )

    return (
      <ui.div __css={css} {...(rest as any)}>
        <Icon
          ref={ref}
          icon={icon}
          className={cx('ui-fontawesome-icon', className)}
          style={{ width: '100%', height: '100%', fontSize: '1em', color: 'currentcolor' }}
        />
      </ui.div>
    )
  },
)
