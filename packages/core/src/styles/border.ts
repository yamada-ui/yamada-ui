import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const border: Configs = {
  border: configs.border('border'),
  borderWidth: true,
  borderStyle: true,
  borderColor: configs.color('borderColor'),
  borderTop: configs.border('borderTop'),
  borderTopWidth: true,
  borderTopStyle: true,
  borderTopColor: configs.color('borderTopColor'),
  borderLeft: configs.border('borderLeft'),
  borderLeftWidth: true,
  borderLeftStyle: true,
  borderLeftColor: configs.color('borderLeftColor'),
  borderBottom: configs.border('borderBottom'),
  borderBottomWidth: true,
  borderBottomStyle: true,
  borderBottomColor: configs.color('borderBottomColor'),
  borderRight: configs.border('borderRight'),
  borderRightWidth: true,
  borderRightStyle: true,
  borderRightColor: configs.color('borderRightColor'),
  borderY: configs.border(['borderTop', 'borderBottom']),
  borderX: configs.border(['borderLeft', 'borderRight']),
  borderInline: configs.border('borderInline'),
  borderInlineStart: configs.border('borderInlineStart'),
  borderInlineStartWidth: configs.prop('borderInlineStartWidth'),
  borderInlineStartStyle: configs.prop('borderInlineStartStyle'),
  borderInlineStartColor: configs.color('borderInlineStartColor'),
  borderInlineEnd: configs.border('borderInlineEnd'),
  borderInlineEndWidth: configs.prop('borderInlineEndWidth'),
  borderInlineEndStyle: configs.prop('borderInlineEndStyle'),
  borderInlineEndColor: configs.color('borderInlineEndColor'),
  borderBlock: configs.border('borderBlock'),
  borderBlockStart: configs.border('borderBlockStart'),
  borderBlockStartWidth: true,
  borderBlockStartStyle: true,
  borderBlockStartColor: configs.color('borderBlockStartColor'),
  borderBlockEnd: configs.border('borderBlockEnd'),
  borderBlockEndWidth: true,
  borderBlockEndStyle: true,
  borderBlockEndColor: configs.color('borderBlockEndColor'),
  borderRadius: configs.radii('borderRadius'),
  borderTopRightRadius: configs.radii('borderTopRightRadius'),
  borderTopLeftRadius: configs.radii('borderTopLeftRadius'),
  borderBottomLeftRadius: configs.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: configs.radii('borderBottomRightRadius'),
  borderTopRadius: configs.radii([
    'borderTopLeftRadius',
    'borderTopRightRadius',
  ]),
  borderBottomRadius: configs.radii([
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ]),
  borderRightRadius: configs.radii([
    'borderTopRightRadius',
    'borderBottomRightRadius',
  ]),
  borderLeftRadius: configs.radii([
    'borderTopLeftRadius',
    'borderBottomLeftRadius',
  ]),
  borderStartStartRadius: configs.radii('borderStartStartRadius'),
  borderStartEndRadius: configs.radii('borderStartEndRadius'),
  borderEndStartRadius: configs.radii('borderEndStartRadius'),
  borderEndEndRadius: configs.radii('borderEndEndRadius'),
  borderInlineStartRadius: configs.radii([
    'borderStartStartRadius',
    'borderStartEndRadius',
  ]),
  borderInlineEndRadius: configs.radii([
    'borderEndStartRadius',
    'borderEndEndRadius',
  ]),
}

Object.assign(border, {
  borderStart: border.borderInlineStart,
  borderStartWidth: border.borderInlineStartWidth,
  borderStartStyle: border.borderInlineStartStyle,
  borderStartColor: border.borderInlineStartColor,
  borderEnd: border.borderInlineEnd,
  borderEndWidth: border.borderInlineEndWidth,
  borderEndStyle: border.borderInlineEndStyle,
  borderEndColor: border.borderInlineEndColor,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  rounded: border.borderRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedTop: border.borderTopRadius,
  roundedBottom: border.borderBottomRadius,
  roundedRight: border.borderRightRadius,
  roundedLeft: border.borderLeftRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
})

export type BorderProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `border` property.
   */
  border?: Token<CSS.Property.Border | number, 'borders', Y, M>
  /**
   * The CSS `border-width` property.
   */
  borderWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  /**
   * The CSS `border-style` property.
   */
  borderStyle?: Token<CSS.Property.BorderStyle, unknown, Y, M>
  /**
   * The CSS `border-color` property.
   */
  borderColor?: Token<CSS.Property.BorderTopColor, 'colors', Y, M>
  /**
   * The CSS `border-radius` property.
   */
  borderRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-radius` property.
   */
  rounded?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-top` property.
   */
  borderTop?: Token<CSS.Property.BorderTop | number, 'borders', Y, M>
  /**
   * The CSS `border-block-start` property.
   */
  borderBlockStart?: Token<
    CSS.Property.BorderBlockStart | number,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `border-top-width` property.
   */
  borderTopWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  /**
   * The CSS `border-block-start-width` property.
   */
  borderBlockStartWidth?: Token<
    CSS.Property.BorderBlockStartWidth | number,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `border-bottom-width` property.
   */
  borderBottomWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  /**
   * The CSS `border-block-end-width` property.
   */
  borderBlockEndWidth?: Token<
    CSS.Property.BorderBlockEndWidth | number,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `border-left-width` property.
   */
  borderLeftWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  /**
   * The CSS `border-inline-start-width` property.
   */
  borderStartWidth?: Token<
    CSS.Property.BorderInlineStartWidth | number,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `border-inline-start-width` property.
   */
  borderInlineStartWidth?: Token<
    CSS.Property.BorderInlineStartWidth | number,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `border-right-width` property.
   */
  borderRightWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  /**
   * The CSS `border-inline-end-width` property.
   */
  borderEndWidth?: Token<
    CSS.Property.BorderInlineEndWidth | number,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `border-inline-end-width` property.
   */
  borderInlineEndWidth?: Token<
    CSS.Property.BorderInlineEndWidth | number,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `border-top-style` property.
   */
  borderTopStyle?: Token<CSS.Property.BorderTopStyle, unknown, Y, M>
  /**
   * The CSS `border-block-start-style` property.
   */
  borderBlockStartStyle?: Token<
    CSS.Property.BorderBlockStartStyle,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `border-bottom-style` property.
   */
  borderBottomStyle?: Token<CSS.Property.BorderBottomStyle, unknown, Y, M>
  /**
   * The CSS `border-block-end-style` property.
   */
  borderBlockEndStyle?: Token<CSS.Property.BorderBlockEndStyle, unknown, Y, M>
  /**
   * The CSS `border-left-style` property.
   */
  borderLeftStyle?: Token<CSS.Property.BorderLeftStyle, unknown, Y, M>
  /**
   * The CSS `border-inline-start-style` property.
   */
  borderStartStyle?: Token<CSS.Property.BorderInlineStartStyle, unknown, Y, M>
  /**
   * The CSS `border-inline-start-style` property.
   */
  borderInlineStartStyle?: Token<
    CSS.Property.BorderInlineStartStyle,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `border-right-style` property.
   */
  borderRightStyle?: Token<CSS.Property.BorderRightStyle, unknown, Y, M>
  /**
   * The CSS `border-inline-end-style` property.
   */
  borderEndStyle?: Token<CSS.Property.BorderInlineEndStyle, unknown, Y, M>
  /**
   * The CSS `border-inline-end-style` property.
   */
  borderInlineEndStyle?: Token<CSS.Property.BorderInlineEndStyle, unknown, Y, M>
  /**
   * The CSS `border-top-color` property.
   */
  borderTopColor?: Token<CSS.Property.BorderTopColor, 'colors', Y, M>
  /**
   * The CSS `border-block-start-color` property.
   */
  borderBlockStartColor?: Token<
    CSS.Property.BorderBlockStartColor,
    'colors',
    Y,
    M
  >
  /**
   * The CSS `border-bottom-color` property.
   */
  borderBottomColor?: Token<CSS.Property.BorderBottomColor, 'colors', Y, M>
  /**
   * The CSS `border-block-end-color` property.
   */
  borderBlockEndColor?: Token<CSS.Property.BorderBlockEndColor, 'colors', Y, M>
  /**
   * The CSS `border-left-color` property.
   */
  borderLeftColor?: Token<CSS.Property.BorderLeftColor, 'colors', Y, M>
  /**
   * The CSS `border-inline-start-color` property.
   */
  borderStartColor?: Token<CSS.Property.BorderInlineStartColor, unknown, Y, M>
  /**
   * The CSS `border-inline-start-color` property.
   */
  borderInlineStartColor?: Token<
    CSS.Property.BorderInlineStartColor,
    'colors',
    Y,
    M
  >
  /**
   * The CSS `border-right-color` property.
   */
  borderRightColor?: Token<CSS.Property.BorderRightColor, 'colors', Y, M>
  /**
   * The CSS `border-inline-end-color` property.
   */
  borderEndColor?: Token<CSS.Property.BorderInlineEndColor, unknown, Y, M>
  /**
   * The CSS `border-inline-end-color` property.
   */
  borderInlineEndColor?: Token<
    CSS.Property.BorderInlineEndColor,
    'colors',
    Y,
    M
  >
  /**
   * The CSS `border-right` property.
   */
  borderRight?: Token<CSS.Property.BorderRight | number, 'borders', Y, M>
  /**
   * The CSS `border-inline-end` property.
   */
  borderEnd?: Token<CSS.Property.BorderInlineEnd | number, unknown, Y, M>
  /**
   * The CSS `border-inline-end` property.
   */
  borderInlineEnd?: Token<CSS.Property.BorderInlineEnd | number, unknown, Y, M>
  /**
   * The CSS `border-bottom` property.
   */
  borderBottom?: Token<CSS.Property.BorderBottom | number, 'borders', Y, M>
  /**
   * The CSS `border-block-end` property.
   */
  borderBlockEnd?: Token<CSS.Property.BorderBlockEnd | number, unknown, Y, M>
  /**
   * The CSS `border-left` property.
   */
  borderLeft?: Token<CSS.Property.BorderLeft | number, 'borders', Y, M>
  /**
   * The CSS `border-inline-start` property.
   */
  borderStart?: Token<CSS.Property.BorderInlineStart | number, unknown, Y, M>
  /**
   * The CSS `border-inline-start` property.
   */
  borderInlineStart?: Token<
    CSS.Property.BorderInlineStart | number,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `border-top-left-radius`, and `border-top-right-radius` property.
   */
  borderTopRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-top-left-radius`, and `border-top-right-radius` property.
   */
  roundedTop?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-top-right-radius`, and `border-bottom-right-radius` property.
   */
  borderRightRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-top-right-radius`, and `border-bottom-right-radius` property.
   */
  roundedRight?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-end-start-radius`, and `border-end-end-radius` property.
   */
  roundedEnd?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-end-start-radius`, and `border-end-end-radius` property.
   */
  borderInlineEndRadius?: Token<
    CSS.Property.BorderRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-end-start-radius`, and `border-end-end-radius` property.
   */
  borderEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-bottom-left-radius`, and `border-bottom-right-radius` property.
   */
  borderBottomRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-bottom-left-radius`, and `border-bottom-right-radius` property.
   */
  roundedBottom?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-top-left-radius`, and `border-bottom-left-radius` property.
   */
  borderLeftRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-top-left-radius`, and `border-bottom-left-radius` property.
   */
  roundedLeft?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-start-start-radius`, and `border-start-end-radius` property.
   */
  roundedStart?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-start-start-radius`, and `border-start-end-radius` property.
   */
  borderInlineStartRadius?: Token<
    CSS.Property.BorderRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-start-start-radius`, and `border-start-end-radius` property.
   */
  borderStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-top-left-radius` property.
   */
  borderTopLeftRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-start-start-radius` property.
   */
  borderTopStartRadius?: Token<
    CSS.Property.BorderRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-start-start-radius` property.
   */
  borderStartStartRadius?: Token<
    CSS.Property.BorderStartStartRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-top-left-radius` property.
   */
  roundedTopLeft?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-start-start-radius` property.
   */
  roundedTopStart?: Token<
    CSS.Property.BorderStartStartRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-top-right-radius` property.
   */
  borderTopRightRadius?: Token<
    CSS.Property.BorderRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-start-end-radius` property.
   */
  borderTopEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-start-end-radius` property.
   */
  borderStartEndRadius?: Token<
    CSS.Property.BorderStartEndRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-top-right-radius` property.
   */
  roundedTopRight?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-start-end-radius` property.
   */
  roundedTopEnd?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-bottom-left-radius` property.
   */
  borderBottomLeftRadius?: Token<
    CSS.Property.BorderRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-end-start-radius` property.
   */
  borderBottomStartRadius?: Token<
    CSS.Property.BorderRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-end-start-radius` property.
   */
  borderEndStartRadius?: Token<
    CSS.Property.BorderEndStartRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-bottom-left-radius` property.
   */
  roundedBottomLeft?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-end-start-radius` property.
   */
  roundedBottomStart?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-bottom-right-radius` property.
   */
  borderBottomRightRadius?: Token<
    CSS.Property.BorderRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-end-end-radius` property.
   */
  borderBottomEndRadius?: Token<
    CSS.Property.BorderRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-end-end-radius` property.
   */
  borderEndEndRadius?: Token<
    CSS.Property.BorderEndEndRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-bottom-right-radius` property.
   */
  roundedBottomRight?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-end-end-radius` property.
   */
  roundedBottomEnd?: Token<
    CSS.Property.BorderEndEndRadius | number,
    'radii',
    Y,
    M
  >
  /**
   * The CSS `border-left`, and `border-right` property.
   */
  borderX?: Token<CSS.Property.Border | number, 'borders', Y, M>
  /**
   * The CSS `border-inline` property.
   */
  borderInline?: Token<CSS.Property.BorderInline | number, unknown, Y, M>
  /**
   * The CSS `border-top`, and `border-bottom` property.
   */
  borderY?: Token<CSS.Property.Border | number, 'borders', Y, M>
  /**
   * The CSS `border-block` property.
   */
  borderBlock?: Token<CSS.Property.BorderBlock | number, unknown, Y, M>
}
