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

export type InteractivityProps<Y = 'responsive', M = 'colorScheme'> = {
  appearance?: Token<CSS.Property.Appearance, unknown, Y, M>
  userSelect?: Token<CSS.Property.UserSelect, unknown, Y, M>
  pointerEvents?: Token<CSS.Property.PointerEvents, unknown, Y, M>
  resize?: Token<CSS.Property.Resize, unknown, Y, M>
  cursor?: Token<CSS.Property.Cursor, unknown, Y, M>
  outline?: Token<CSS.Property.Outline | number, unknown, Y, M>
  outlineOffset?: Token<CSS.Property.OutlineOffset | number, unknown, Y, M>
  outlineColor?: Token<CSS.Property.Color, 'colors', Y, M>
}
