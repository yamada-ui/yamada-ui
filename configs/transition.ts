import * as CSS from 'csstype'
import { Token } from '../types'
import { Configs, configs } from './'

export const transition: Configs = {
  transition: true,
  transitionDelay: true,
  willChange: true,
  transitionDuration: configs.prop('transitionDuration', 'transition.duration'),
  transitionProperty: configs.prop('transitionProperty', 'transition.property'),
  transitionTimingFunction: configs.prop('transitionTimingFunction', 'transition.easing'),
}

export type TransitionProps<Y = 'responsive', M = 'scheme'> = {
  transition?: Token<CSS.Property.Transition, unknown, Y, M>
  transitionProperty?: Token<CSS.Property.TransitionProperty, unknown, Y, M>
  transitionTimingFunction?: Token<CSS.Property.TransitionTimingFunction, unknown, Y, M>
  transitionDuration?: Token<string, unknown, Y, M>
  transitionDelay?: Token<CSS.Property.TransitionDelay, unknown, Y, M>
  willChange?: Token<CSS.Property.WillChange, unknown, Y, M>
}
