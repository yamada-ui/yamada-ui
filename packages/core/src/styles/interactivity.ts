import * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const interactivity: Configs = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: true,
  outlineOffset: true,
  outlineColor: configs.color('outlineColor'),
}

export type InteractivityProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `appearance` property.
   */
  appearance?: Token<CSS.Property.Appearance, unknown, Y, M>
  /**
   * The CSS `user-select` property.
   */
  userSelect?: Token<CSS.Property.UserSelect, unknown, Y, M>
  /**
   * The CSS `pointer-events` property.
   */
  pointerEvents?: Token<CSS.Property.PointerEvents, unknown, Y, M>
  /**
   * The CSS `resize` property.
   */
  resize?: Token<CSS.Property.Resize, unknown, Y, M>
  /**
   * The CSS `cursor` property.
   */
  cursor?: Token<CSS.Property.Cursor, unknown, Y, M>
  /**
   * The CSS `outline` property.
   */
  outline?: Token<CSS.Property.Outline | number, unknown, Y, M>
  /**
   * The CSS `outline-offset` property.
   */
  outlineOffset?: Token<CSS.Property.OutlineOffset | number, unknown, Y, M>
  /**
   * The CSS `outline-color` property.
   */
  outlineColor?: Token<CSS.Property.Color, 'colors', Y, M>
}
