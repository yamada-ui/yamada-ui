import * as CSS from 'csstype'
import { Token } from '../types'
import { Configs, configs } from './'

export const transition: Configs = {
  transition: true,
  transitionDelay: true,
  willChange: true,
  transitionProperty: configs.prop('transitionProperty', 'transitions.property'),
  transitionDuration: configs.prop('transitionDuration', 'transitions.duration'),
  transitionTimingFunction: configs.prop('transitionTimingFunction', 'transitions.easing'),
}

export type TransitionProps<Y = 'responsive', M = 'scheme'> = {
  transition?: Token<CSS.Property.Transition, unknown, Y, M>
  transitionProperty?: Token<CSS.Property.TransitionProperty, 'transitionProperty', Y, M>
  transitionDuration?: Token<string, 'transitionDuration', Y, M>
  transitionTimingFunction?: Token<CSS.Property.TransitionTimingFunction, 'transitionEasing', Y, M>
  transitionDelay?: Token<CSS.Property.TransitionDelay, unknown, Y, M>
  willChange?: Token<CSS.Property.WillChange, unknown, Y, M>
}
