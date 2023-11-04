import type * as CSS from 'csstype'
import { Token } from '../css'
import { Configs, configs, transforms } from './config'

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
  animation: configs.propTransform('animation', transforms.animation),
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

export type TransitionProps = {
  /**
   * The CSS `transition-delay` property.
   */
  transitionDelay?: Token<CSS.Property.TransitionDelay>
  /**
   * The CSS `will-change` property.
   */
  willChange?: Token<CSS.Property.WillChange>
  /**
   * The CSS `transition-property` property.
   */
  transitionProperty?: Token<
    CSS.Property.TransitionProperty,
    'transitionProperty'
  >
  /**
   * The CSS `transition-duration` property.
   */
  transitionDuration?: Token<
    CSS.Property.TransitionDuration,
    'transitionDuration'
  >
  /**
   * The CSS `transition-timing-function` property.
   */
  transitionTimingFunction?: Token<
    CSS.Property.TransitionTimingFunction,
    'transitionEasing'
  >
  /**
   * The CSS `animation` property.
   */
  animation?: Token<CSS.Property.Animation, 'animations'>
  /**
   * The CSS `animation-name` property.
   */
  animationName?: Token<CSS.Property.AnimationName>
  /**
   * The CSS `animation-duration` property.
   */
  animationDuration?: Token<
    CSS.Property.AnimationDuration,
    'transitionDuration'
  >
  /**
   * The CSS `animation-timing-function` property.
   */
  animationTimingFunction?: Token<
    CSS.Property.AnimationTimingFunction,
    'transitionEasing'
  >
  /**
   * The CSS `animation-delay` property.
   */
  animationDelay?: Token<CSS.Property.AnimationDelay>
  /**
   * The CSS `animation-iteration-count` property.
   */
  animationIterationCount?: Token<CSS.Property.AnimationIterationCount>
  /**
   * The CSS `animation-direction` property.
   */
  animationDirection?: Token<CSS.Property.AnimationDirection>
  /**
   * The CSS `animation-fill-mode` property.
   */
  animationFillMode?: Token<CSS.Property.AnimationFillMode>
  /**
   * The CSS `animation-play-state` property.
   */
  animationPlayState?: Token<CSS.Property.AnimationPlayState>
}
