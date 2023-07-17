import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const effect: Configs = {
  boxShadow: configs.shadow('boxShadow'),
  mixBlendMode: true,
  blendMode: configs.prop('mixBlendMode'),
  backgroundBlendMode: true,
  bgBlendMode: configs.prop('backgroundBlendMode'),
  opacity: true,
}

Object.assign(effect, {
  shadow: effect.boxShadow,
})

export type EffectProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The `box-shadow` property.
   */
  boxShadow?: Token<CSS.Property.BoxShadow | number, 'shadows', Y, M>
  /**
   * The `box-shadow` property.
   */
  shadow?: Token<CSS.Property.BoxShadow | number, 'shadows', Y, M>
  /**
   * The `mix-blend-mode` property.
   */
  mixBlendMode?: Token<CSS.Property.MixBlendMode, unknown, Y, M>
  /**
   * The `blend-mode` property.
   */
  blendMode?: Token<CSS.Property.MixBlendMode, unknown, Y, M>
  /**
   * The CSS `background-blend-mode` property.
   */
  backgroundBlendMode?: Token<CSS.Property.BackgroundBlendMode, unknown, Y, M>
  /**
   * The CSS `background-blend-mode` property.
   */
  bgBlendMode?: Token<CSS.Property.BackgroundBlendMode, unknown, Y, M>
  /**
   * The CSS `opacity` property.
   */
  opacity?: Token<CSS.Property.Opacity, unknown, Y, M>
}
