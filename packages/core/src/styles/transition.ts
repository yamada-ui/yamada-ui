import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs } from './config'

export const transition: Configs = {
  transitionDelay: true,
  willChange: true,
  transitionProperty: configs.prop(
    'transitionProperty',
    'transitions.property',
  ),
  transitionDuration: configs.prop(
    'transitionDuration',
    'transitions.duration',
  ),
  transitionTimingFunction: configs.prop(
    'transitionTimingFunction',
    'transitions.easing',
  ),
  animation: true,
  animationName: true,
  animationDuration: configs.prop('animationDuration', 'transitions.duration'),
  animationTimingFunction: configs.prop(
    'animationTimingFunction',
    'transitions.easing',
  ),
  animationDelay: true,
  animationIterationCount: true,
  animationDirection: true,
  animationFillMode: true,
  animationPlayState: true,
}

export type TransitionProps<Y = 'responsive', M = 'colorMode'> = {
  /**
   * The CSS `transition-delay` property.
   */
  transitionDelay?: Token<CSS.Property.TransitionDelay, unknown, Y, M>
  /**
   * The CSS `will-change` property.
   */
  willChange?: Token<CSS.Property.WillChange, unknown, Y, M>
  /**
   * The CSS `transition-property` property.
   */
  transitionProperty?: Token<
    CSS.Property.TransitionProperty,
    'transitionProperty',
    Y,
    M
  >
  /**
   * The CSS `transition-duration` property.
   */
  transitionDuration?: Token<
    CSS.Property.TransitionDuration,
    'transitionDuration',
    Y,
    M
  >
  /**
   * The CSS `transition-timing-function` property.
   */
  transitionTimingFunction?: Token<
    CSS.Property.TransitionTimingFunction,
    'transitionEasing',
    Y,
    M
  >
  /**
   * The CSS `animation` property.
   */
  animation?: Token<CSS.Property.Animation, unknown, Y, M>
  /**
   * The CSS `animation-name` property.
   */
  animationName?: Token<CSS.Property.AnimationName, unknown, Y, M>
  /**
   * The CSS `animation-duration` property.
   */
  animationDuration?: Token<
    CSS.Property.AnimationDuration,
    'transitionDuration',
    Y,
    M
  >
  /**
   * The CSS `animation-timing-function` property.
   */
  animationTimingFunction?: Token<
    CSS.Property.AnimationTimingFunction,
    'transitionEasing',
    Y,
    M
  >
  /**
   * The CSS `animation-delay` property.
   */
  animationDelay?: Token<CSS.Property.AnimationDelay, unknown, Y, M>
  /**
   * The CSS `animation-iteration-count` property.
   */
  animationIterationCount?: Token<
    CSS.Property.AnimationIterationCount,
    unknown,
    Y,
    M
  >
  /**
   * The CSS `animation-direction` property.
   */
  animationDirection?: Token<CSS.Property.AnimationDirection, unknown, Y, M>
  /**
   * The CSS `animation-fill-mode` property.
   */
  animationFillMode?: Token<CSS.Property.AnimationFillMode, unknown, Y, M>
  /**
   * The CSS `animation-play-state` property.
   */
  animationPlayState?: Token<CSS.Property.AnimationPlayState, unknown, Y, M>
}
