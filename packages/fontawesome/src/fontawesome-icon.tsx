import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef, CSSUIProps } from '@yamada-ui/core'
import { Icon as UIIcon, IconProps as UIIconProps } from '@yamada-ui/icon'
import { cx } from '@yamada-ui/utils'
import { useMemo } from 'react'

type IconOptions = {
  /**
   * The icon of the font awesome.
   * Check the docs to see the icon of possible modifiers you can pass.
   *
   * @see Doc https://fontawesome.com/v5/docs/web/use-with/react
   */
  icon: IconDefinition | IconProp
  /**
   * The CSS `font-size` property.
   */
  size?: CSSUIProps['fontSize']
}

export type IconProps = UIIconProps & IconOptions

export const Icon = forwardRef<IconProps, 'svg'>(
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
