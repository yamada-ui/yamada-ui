import * as CSS from 'csstype'
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
  border?: Token<CSS.Property.Border | number, 'borders', Y, M>
  borderWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  borderStyle?: Token<CSS.Property.BorderStyle, unknown, Y, M>
  borderColor?: Token<CSS.Property.BorderTopColor, 'colors', Y, M>
  borderRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  rounded?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderTop?: Token<CSS.Property.BorderTop | number, 'borders', Y, M>
  borderBlockStart?: Token<CSS.Property.BorderBlockStart | number, unknown, Y, M>
  borderTopWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  borderBlockStartWidth?: Token<CSS.Property.BorderBlockStartWidth | number, unknown, Y, M>
  borderBottomWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  borderBlockEndWidth?: Token<CSS.Property.BorderBlockEndWidth | number, unknown, Y, M>
  borderLeftWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  borderStartWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  borderInlineStartWidth?: Token<CSS.Property.BorderInlineStartWidth | number, unknown, Y, M>
  borderRightWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  borderEndWidth?: Token<CSS.Property.BorderWidth | number, unknown, Y, M>
  borderInlineEndWidth?: Token<CSS.Property.BorderInlineEndWidth | number, unknown, Y, M>
  borderTopStyle?: Token<CSS.Property.BorderTopStyle, unknown, Y, M>
  borderBlockStartStyle?: Token<CSS.Property.BorderBlockStartStyle, unknown, Y, M>
  borderBottomStyle?: Token<CSS.Property.BorderBottomStyle, unknown, Y, M>
  borderBlockEndStyle?: Token<CSS.Property.BorderBlockEndStyle, unknown, Y, M>
  borderLeftStyle?: Token<CSS.Property.BorderLeftStyle, unknown, Y, M>
  borderStartStyle?: Token<CSS.Property.BorderInlineStartStyle, unknown, Y, M>
  borderInlineStartStyle?: Token<CSS.Property.BorderInlineStartStyle, unknown, Y, M>
  borderRightStyle?: Token<CSS.Property.BorderRightStyle, unknown, Y, M>
  borderEndStyle?: Token<CSS.Property.BorderInlineEndStyle, unknown, Y, M>
  borderInlineEndStyle?: Token<CSS.Property.BorderInlineEndStyle, unknown, Y, M>
  borderTopColor?: Token<CSS.Property.BorderTopColor, 'colors', Y, M>
  borderBlockStartColor?: Token<CSS.Property.BorderBlockStartColor, 'colors', Y, M>
  borderBottomColor?: Token<CSS.Property.BorderBottomColor, 'colors', Y, M>
  borderBlockEndColor?: Token<CSS.Property.BorderBlockEndColor, 'colors', Y, M>
  borderLeftColor?: Token<CSS.Property.BorderLeftColor, 'colors', Y, M>
  borderStartColor?: Token<CSS.Property.BorderInlineStartColor, unknown, Y, M>
  borderInlineStartColor?: Token<CSS.Property.BorderInlineStartColor, 'colors', Y, M>
  borderRightColor?: Token<CSS.Property.BorderRightColor, 'colors', Y, M>
  borderEndColor?: Token<CSS.Property.BorderInlineEndColor, unknown, Y, M>
  borderInlineEndColor?: Token<CSS.Property.BorderInlineEndColor, 'colors', Y, M>
  borderRight?: Token<CSS.Property.BorderRight | number, 'borders', Y, M>
  borderEnd?: Token<CSS.Property.BorderInlineEnd | number, unknown, Y, M>
  borderInlineEnd?: Token<CSS.Property.BorderInlineEnd | number, unknown, Y, M>
  borderBottom?: Token<CSS.Property.BorderBottom | number, 'borders', Y, M>
  borderBlockEnd?: Token<CSS.Property.BorderBlockEnd | number, unknown, Y, M>
  borderLeft?: Token<CSS.Property.BorderLeft | number, 'borders', Y, M>
  borderStart?: Token<CSS.Property.BorderInlineStart | number, unknown, Y, M>
  borderInlineStart?: Token<CSS.Property.BorderInlineStart | number, unknown, Y, M>
  borderTopRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  roundedTop?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderRightRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  roundedRight?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  roundedEnd?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderInlineEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderBottomRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  roundedBottom?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderLeftRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  roundedLeft?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  roundedStart?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderInlineStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderTopLeftRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderTopStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderStartStartRadius?: Token<CSS.Property.BorderStartStartRadius | number, 'radii', Y, M>
  roundedTopLeft?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  roundedTopStart?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderTopRightRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderTopEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderStartEndRadius?: Token<CSS.Property.BorderStartEndRadius | number, 'radii', Y, M>
  roundedTopRight?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  roundedTopEnd?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderBottomLeftRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderBottomStartRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderEndStartRadius?: Token<CSS.Property.BorderEndStartRadius | number, 'radii', Y, M>
  roundedBottomLeft?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  roundedBottomStart?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderBottomRightRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderBottomEndRadius?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderEndEndRadius?: Token<CSS.Property.BorderEndEndRadius | number, 'radii', Y, M>
  roundedBottomRight?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  roundedBottomEnd?: Token<CSS.Property.BorderRadius | number, 'radii', Y, M>
  borderX?: Token<CSS.Property.Border | number, 'borders', Y, M>
  borderInline?: Token<CSS.Property.BorderInline | number, unknown, Y, M>
  borderY?: Token<CSS.Property.Border | number, 'borders', Y, M>
  borderBlock?: Token<CSS.Property.BorderBlock | number, unknown, Y, M>
}
