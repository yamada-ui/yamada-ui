import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef, CSSUIProps } from '@yamada-ui/core'
import { Icon as UIIcon, IconProps as UIIconProps } from '@yamada-ui/icon'
import { cx } from '@yamada-ui/utils'
import { useMemo } from 'react'

type FontAwesomeIconOptions = {
  className?: string
  icon: IconDefinition | IconProp
  size?: CSSUIProps['fontSize']
}

export type FontAwesomeIconProps = UIIconProps & FontAwesomeIconOptions

export const Icon = forwardRef<FontAwesomeIconProps, 'svg'>(
  ({ className, icon, size: fontSize, __css, ...rest }, ref) => {
    const css = useMemo(
      () => ({
        display: 'inline-block',
        flexShrink: 0,
        fontSize,
        color: 'currentcolor',
        ...__css,
      }),
      [__css, fontSize],
    )

    return (
      <UIIcon
        ref={ref}
        as={FontAwesomeIcon}
        icon={icon}
        className={cx('ui-fontawesome-icon', className)}
        __css={css}
        {...rest}
      />
    )
  },
)
