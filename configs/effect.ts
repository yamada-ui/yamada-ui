import * as CSS from 'csstype'
import { Token } from '../types'
import { Configs, configs } from './'

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

export type EffectProps<Y = 'responsive', M = 'scheme'> = {
  boxShadow?: Token<CSS.Property.BoxShadow | number, 'shadows', Y, M>
  shadow?: Token<CSS.Property.BoxShadow | number, 'shadows', Y, M>
  mixBlendMode?: Token<CSS.Property.MixBlendMode, unknown, Y, M>
  blendMode?: Token<CSS.Property.MixBlendMode, unknown, Y, M>
  backgroundBlendMode?: Token<CSS.Property.BackgroundBlendMode, unknown, Y, M>
  bgBlendMode?: Token<CSS.Property.BackgroundBlendMode, unknown, Y, M>
  opacity?: Token<CSS.Property.Opacity, unknown, Y, M>
}
