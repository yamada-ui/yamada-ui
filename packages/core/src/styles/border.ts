import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const border: Configs = {
  border: configs.border('border'),
  borderWidth: true,
  borderStyle: true,
  borderColor: configs.color('borderColor'),
  borderRadius: configs.radii('borderRadius'),
  borderTop: configs.border('borderTop'),
  borderBlockStart: configs.border('borderBlockStart'),
  borderTopLeftRadius: configs.radii('borderTopLeftRadius'),
  borderStartStartRadius: configs.radii('borderStartStartRadius'),
  borderEndStartRadius: configs.radii('borderEndStartRadius'),
  borderTopRightRadius: configs.radii('borderTopRightRadius'),
  borderStartEndRadius: configs.radii('borderStartEndRadius'),
  borderEndEndRadius: configs.radii('borderEndEndRadius'),
  borderRight: configs.border('borderRight'),
  borderInlineEnd: configs.border('borderInlineEnd'),
  borderBottom: configs.border('borderBottom'),
  borderBlockEnd: configs.border('borderBlockEnd'),
  borderBottomLeftRadius: configs.radii('borderBottomLeftRadius'),
  borderBottomRightRadius: configs.radii('borderBottomRightRadius'),
  borderLeft: configs.border('borderLeft'),
  borderInlineStart: configs.border('borderInlineStart'),
  borderInlineStartRadius: configs.radii(['borderStartStartRadius', 'borderStartEndRadius']),
  borderInlineEndRadius: configs.radii(['borderEndStartRadius', 'borderEndEndRadius']),
  borderX: configs.border(['borderLeft', 'borderRight']),
  borderInline: configs.border('borderInline'),
  borderY: configs.border(['borderTop', 'borderBottom']),
  borderBlock: configs.border('borderBlock'),
  borderTopWidth: true,
  borderBlockStartWidth: true,
  borderTopColor: configs.color('borderTopColor'),
  borderBlockStartColor: configs.color('borderBlockStartColor'),
  borderTopStyle: true,
  borderBlockStartStyle: true,
  borderBottomWidth: true,
  borderBlockEndWidth: true,
  borderBottomColor: configs.color('borderBottomColor'),
  borderBlockEndColor: configs.color('borderBlockEndColor'),
  borderBottomStyle: true,
  borderBlockEndStyle: true,
  borderLeftWidth: true,
  borderInlineStartWidth: configs.prop('borderInlineStartWidth'),
  borderLeftColor: configs.color('borderLeftColor'),
  borderInlineStartColor: configs.color('borderInlineStartColor'),
  borderLeftStyle: true,
  borderInlineStartStyle: configs.prop('borderInlineStartStyle'),
  borderRightWidth: true,
  borderInlineEndWidth: configs.prop('borderInlineEndWidth'),
  borderRightColor: configs.color('borderRightColor'),
  borderInlineEndColor: configs.color('borderInlineEndColor'),
  borderRightStyle: true,
  borderInlineEndStyle: configs.prop('borderInlineEndStyle'),
  borderTopRadius: configs.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
  borderBottomRadius: configs.radii(['borderBottomLeftRadius', 'borderBottomRightRadius']),
  borderLeftRadius: configs.radii(['borderTopLeftRadius', 'borderBottomLeftRadius']),
  borderRightRadius: configs.radii(['borderTopRightRadius', 'borderBottomRightRadius']),
}

Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle,
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
  borderBlockStart?: Token<CSS.Property.BorderBlockStart | number, unknown, Y, M>
  /**
   * The CSS `border-top-width` property.
   */
  borderTopWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  /**
   * The CSS `border-block-start-width` property.
   */
  borderBlockStartWidth?: Token<CSS.Property.BorderBlockStartWidth | number, unknown, Y, M>
  /**
   * The CSS `border-bottom-width` property.
   */
  borderBottomWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  /**
   * The CSS `border-block-end-width` property.
   */
  borderBlockEndWidth?: Token<CSS.Property.BorderBlockEndWidth | number, unknown, Y, M>
  /**
   * The CSS `border-left-width` property.
   */
  borderLeftWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  /**
   * The CSS `border-inline-start-width` property.
   */
  borderStartWidth?: Token<CSS.Property.BorderInlineStartWidth | number, unknown, Y, M>
  /**
   * The CSS `border-inline-start-width` property.
   */
  borderInlineStartWidth?: Token<CSS.Property.BorderInlineStartWidth | number, unknown, Y, M>
  /**
   * The CSS `border-right-width` property.
   */
  borderRightWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  /**
   * The CSS `border-inline-end-width` property.
   */
  borderEndWidth?: Token<CSS.Property.BorderInlineEndWidth | number, unknown, Y, M>
  /**
   * The CSS `border-inline-end-width` property.
   */
  borderInlineEndWidth?: Token<CSS.Property.BorderInlineEndWidth | number, unknown, Y, M>
  /**
   * The CSS `border-top-style` property.
   */
  borderTopStyle?: Token<CSS.Property.BorderTopStyle, unknown, Y, M>
  /**
   * The CSS `border-block-start-style` property.
   */
  borderBlockStartStyle?: Token<CSS.Property.BorderBlockStartStyle, unknown, Y, M>
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
  borderInlineStartStyle?: Token<CSS.Property.BorderInlineStartStyle, unknown, Y, M>
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
  borderBlockStartColor?: Token<CSS.Property.BorderBlockStartColor, 'colors', Y, M>
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
  borderInlineStartColor?: Token<CSS.Property.BorderInlineStartColor, 'colors', Y, M>
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
  borderInlineEndColor?: Token<CSS.Property.BorderInlineEndColor, 'colors', Y, M>
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
  borderInlineStart?: Token<CSS.Property.BorderInlineStart | number, unknown, Y, M>
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
  borderInlineEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
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
  borderInlineStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
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
  borderTopStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-start-start-radius` property.
   */
  borderStartStartRadius?: Token<CSS.Property.BorderStartStartRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-top-left-radius` property.
   */
  roundedTopLeft?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-start-start-radius` property.
   */
  roundedTopStart?: Token<CSS.Property.BorderStartStartRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-top-right-radius` property.
   */
  borderTopRightRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-start-end-radius` property.
   */
  borderTopEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-start-end-radius` property.
   */
  borderStartEndRadius?: Token<CSS.Property.BorderStartEndRadius | number, 'radii', Y, M>
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
  borderBottomLeftRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-end-start-radius` property.
   */
  borderBottomStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-end-start-radius` property.
   */
  borderEndStartRadius?: Token<CSS.Property.BorderEndStartRadius | number, 'radii', Y, M>
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
  borderBottomRightRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-end-end-radius` property.
   */
  borderBottomEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-end-end-radius` property.
   */
  borderEndEndRadius?: Token<CSS.Property.BorderEndEndRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-bottom-right-radius` property.
   */
  roundedBottomRight?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  /**
   * The CSS `border-end-end-radius` property.
   */
  roundedBottomEnd?: Token<CSS.Property.BorderEndEndRadius | number, 'radii', Y, M>
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
