import * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const transition: Configs = {
  transitionDelay: true,
  willChange: true,
  transitionProperty: configs.prop('transitionProperty', 'transitions.property'),
  transitionDuration: configs.prop('transitionDuration', 'transitions.duration'),
  transitionTimingFunction: configs.prop('transitionTimingFunction', 'transitions.easing'),
  animation: true,
  animationName: true,
  animationDuration: configs.prop('animationDuration', 'transitions.duration'),
  animationTimingFunction: configs.prop('animationTimingFunction', 'transitions.easing'),
  animationDelay: true,
  animationIterationCount: true,
  animationDirection: true,
  animationFillMode: true,
  animationPlayState: true,
}

export type TransitionProps<Y = 'responsive', M = 'colorMode'> = {
  transitionDelay?: Token<CSS.Property.TransitionDelay, unknown, Y, M>
  willChange?: Token<CSS.Property.WillChange, unknown, Y, M>
  transitionProperty?: Token<CSS.Property.TransitionProperty, 'transitionProperty', Y, M>
  transitionDuration?: Token<CSS.Property.TransitionDuration, 'transitionDuration', Y, M>
  transitionTimingFunction?: Token<CSS.Property.TransitionTimingFunction, 'transitionEasing', Y, M>
  animation?: Token<CSS.Property.Animation, unknown, Y, M>
  animationName?: Token<CSS.Property.AnimationName, unknown, Y, M>
  animationDuration?: Token<CSS.Property.AnimationDuration, 'transitionDuration', Y, M>
  animationTimingFunction?: Token<CSS.Property.AnimationTimingFunction, 'transitionEasing', Y, M>
  animationDelay?: Token<CSS.Property.AnimationDelay, unknown, Y, M>
  animationIterationCount?: Token<CSS.Property.AnimationIterationCount, unknown, Y, M>
  animationDirection?: Token<CSS.Property.AnimationDirection, unknown, Y, M>
  animationFillMode?: Token<CSS.Property.AnimationFillMode, unknown, Y, M>
  animationPlayState?: Token<CSS.Property.AnimationPlayState, unknown, Y, M>
}
