import type * as CSS from "csstype"
import { Token } from "../css"
import { Configs, configs } from "./config"

export const interactivity: Configs = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: true,
  outlineOffset: true,
  outlineColor: configs.color("outlineColor"),
}

export type InteractivityProps = {
  /**
   * The CSS `appearance` property.
   */
  appearance?: Token<CSS.Property.Appearance>
  /**
   * The CSS `user-select` property.
   */
  userSelect?: Token<CSS.Property.UserSelect>
  /**
   * The CSS `pointer-events` property.
   */
  pointerEvents?: Token<CSS.Property.PointerEvents>
  /**
   * The CSS `resize` property.
   */
  resize?: Token<CSS.Property.Resize>
  /**
   * The CSS `cursor` property.
   */
  cursor?: Token<CSS.Property.Cursor>
  /**
   * The CSS `outline` property.
   */
  outline?: Token<CSS.Property.Outline | number>
  /**
   * The CSS `outline-offset` property.
   */
  outlineOffset?: Token<CSS.Property.OutlineOffset | number>
  /**
   * The CSS `outline-color` property.
   */
  outlineColor?: Token<CSS.Property.Color, "colors">
}
