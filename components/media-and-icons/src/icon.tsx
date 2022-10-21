import { SVGAttributes } from 'react'
import { ui, forwardRef, CSSUIObject, UIProps, CSSUIProps, useFontSize } from '@yamada-ui/system'
import { cx, replaceObject, isUnit } from '@yamada-ui/utils'

type IconOptions = {
  size?: CSSUIProps['fontSize']
}

export type IconProps = Omit<SVGAttributes<SVGElement>, keyof UIProps> & UIProps & IconOptions

export const Icon = forwardRef<IconProps, 'svg'>(
  (
    { as: element, viewBox, color = 'currentColor', size: fontSize, className, __css, ...rest },
    ref,
  ) => {
    const boxSize = replaceObject(fontSize, (value) =>
      !isUnit(value) ? useFontSize(value) : value,
    )

    const css: CSSUIObject = {
      w: '1em',
      h: '1em',
      display: 'inline-block',
      lineHeight: '1em',
      flexShrink: 0,
      color,
      boxSize,
      ...__css,
    }

    if (element && typeof element !== 'string')
      return <ui.svg as={element} className={cx('ui-icon', className)} __css={css} {...rest} />

    return (
      <ui.svg
        ref={ref}
        verticalAlign='middle'
        viewBox={viewBox}
        className={cx('ui-icon', className)}
        __css={css}
        {...rest}
      />
    )
  },
)
