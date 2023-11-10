import type * as CSS from "csstype"
import { Token } from "../css"
import { Configs, configs } from "./config"

export const position: Configs = {
  position: true,
  pos: configs.prop("position"),
  zIndex: configs.prop("zIndex", "zIndices"),
  inset: configs.space("inset"),
  insetX: configs.space(["left", "right"]),
  insetInline: configs.space("insetInline"),
  insetY: configs.space(["top", "bottom"]),
  insetBlock: configs.space("insetBlock"),
  top: configs.space("top"),
  insetBlockStart: configs.space("insetBlockStart"),
  bottom: configs.space("bottom"),
  insetBlockEnd: configs.space("insetBlockEnd"),
  left: configs.space("left"),
  insetInlineStart: configs.space("insetInlineStart"),
  right: configs.space("right"),
  insetInlineEnd: configs.space("insetInlineEnd"),
}

Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd,
})

export type PositionProps = {
  /**
   * The CSS `z-index` property.
   */
  zIndex?: Token<CSS.Property.ZIndex, "zIndices">
  /**
   * The CSS `top` property.
   */
  top?: Token<CSS.Property.Top | number, "spaces">
  /**
   * The CSS `inset-block-start` property.
   */
  insetBlockStart?: Token<CSS.Property.InsetBlockStart | number, "spaces">
  /**
   * The CSS `right` property.
   */
  right?: Token<CSS.Property.Right | number, "spaces">
  /**
   * The CSS `inset-inline-end` property.
   */
  insetInlineEnd?: Token<CSS.Property.InsetInlineEnd | number, "spaces">
  /**
   * The CSS `inset-inline-end` property.
   */
  insetEnd?: Token<CSS.Property.InsetInlineEnd | number, "spaces">
  /**
   * The CSS `bottom` property.
   */
  bottom?: Token<CSS.Property.Bottom | number, "spaces">
  /**
   * The CSS `inset-block-end` property.
   */
  insetBlockEnd?: Token<CSS.Property.InsetBlockEnd | number, "spaces">
  /**
   * The CSS `left` property.
   */
  left?: Token<CSS.Property.Left | number, "spaces">
  /**
   * The CSS `inset-inline-start` property.
   */
  insetInlineStart?: Token<CSS.Property.InsetInlineStart | number, "spaces">
  /**
   * The CSS `inset-start` property.
   */
  insetStart?: Token<CSS.Property.InsetInlineStart | number, "spaces">
  /**
   * The CSS `top`, `left`, `bottom`, `right` property.
   */
  inset?: Token<CSS.Property.Inset | number, "spaces">
  /**
   * The CSS `left`, and `right` property.
   */
  insetX?: Token<CSS.Property.Inset | number, "spaces">
  /**
   * The CSS `top`, and `bottom` property.
   */
  insetY?: Token<CSS.Property.Inset | number, "spaces">
  /**
   * The CSS `position` property.
   */
  pos?: Token<CSS.Property.Position>
  /**
   * The CSS `position` property.
   */
  position?: Token<CSS.Property.Position>
  /**
   * The CSS `inset-inline` property.
   */
  insetInline?: Token<CSS.Property.InsetInline>
  /**
   * The CSS `inset-block` property.
   */
  insetBlock?: Token<CSS.Property.InsetBlock>
}
