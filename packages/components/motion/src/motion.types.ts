import type { Dict, Merge } from "@yamada-ui/utils"
import type {
  Target,
  TargetAndTransition,
  Transition,
  motion,
} from "framer-motion"
import type { Ref, RefAttributes, ReactHTML } from "react"
import type { MotionProps } from "./motion"

export type {
  MotionValue,
  AbsoluteKeyframe as MotionAbsoluteKeyframe,
  AnimatePresenceProps as MotionAnimatePresenceProps,
  AnimationControls as MotionAnimationControls,
  AnimationDefinition as MotionAnimationDefinition,
  AnimationLifecycles as MotionAnimationLifecycles,
  AnimationOptionsWithValueOverrides as MotionAnimationOptionsWithValueOverrides,
  AnimationPlaybackControls as MotionAnimationPlaybackControls,
  AnimationPlaybackLifecycles as MotionAnimationPlaybackLifecycles,
  AnimationPlaybackOptions as MotionAnimationPlaybackOptions,
  AnimationProps as MotionAnimationProps,
  AnimationScope as MotionAnimationScope,
  AnimationSequence as MotionAnimationSequence,
  AnimationType as MotionAnimationType,
  At as MotionAt,
  Axis as MotionAxis,
  AxisDelta as MotionAxisDelta,
  BezierDefinition as MotionBezierDefinition,
  BoundingBox as MotionBoundingBox,
  Box as MotionBox,
  CSSStyleDeclarationWithTransform,
  CreateVisualElement as MotionCreateVisualElement,
  CustomDomComponent as MotionCustomDomComponent,
  CustomValueType as MotionCustomValueType,
  Cycle as MotionCycle,
  CycleState as MotionCycleState,
  DOMKeyframesDefinition as MotionDOMKeyframesDefinition,
  DOMMotionComponents,
  DOMSegment as MotionDOMSegment,
  DOMSegmentWithTransition as MotionDOMSegmentWithTransition,
  DecayOptions as MotionDecayOptions,
  DelayedFunction as MotionDelayedFunction,
  Delta as MotionDelta,
  DevMessage as MotionDevMessage,
  DragElastic as MotionDragElastic,
  DragHandlers as MotionDragHandlers,
  DraggableProps as MotionDraggableProps,
  DurationSpringOptions as MotionDurationSpringOptions,
  DynamicAnimationOptions as MotionDynamicAnimationOptions,
  DynamicOption as MotionDynamicOption,
  Easing as MotionEasing,
  EasingDefinition as MotionEasingDefinition,
  EasingFunction as MotionEasingFunction,
  EasingModifier as MotionEasingModifier,
  ElementOrSelector as MotionElementOrSelector,
  EventInfo as MotionEventInfo,
  FeatureBundle as MotionFeatureBundle,
  FeatureDefinition as MotionFeatureDefinition,
  FeatureDefinitions as MotionFeatureDefinitions,
  FeaturePackage as MotionFeaturePackage,
  FeaturePackages as MotionFeaturePackages,
  FocusHandlers as MotionFocusHandlers,
  HTMLMotionProps,
  HoverHandlers as MotionHoverHandlers,
  HydratedFeatureDefinition as MotionHydratedFeatureDefinition,
  HydratedFeatureDefinitions as MotionHydratedFeatureDefinitions,
  IProjectionNode as MotionIProjectionNode,
  Inertia as MotionInertia,
  InertiaOptions as MotionInertiaOptions,
  InterpolateOptions as MotionInterpolateOptions,
  KeyframeOptions as MotionKeyframeOptions,
  Keyframes as MotionKeyframes,
  KeyframesTarget as MotionKeyframesTarget,
  LayoutProps as MotionLayoutProps,
  LazyFeatureBundle as MotionLazyFeatureBundle,
  LazyProps as MotionLazyProps,
  MixerFactory as MotionMixerFactory,
  MotionAdvancedProps,
  MotionConfigProps,
  MotionStyle,
  MotionTransform,
  MotionValueSegment,
  MotionValueSegmentWithTransition,
  None as MotionNone,
  Orchestration as MotionOrchestration,
  PanHandlers as MotionPanHandlers,
  PanInfo as MotionPanInfo,
  PassiveEffect as MotionPassiveEffect,
  Point as MotionPoint,
  RelayoutInfo as MotionRelayoutInfo,
  RenderComponent as MotionRenderComponent,
  Repeat as MotionRepeat,
  RepeatType as MotionRepeatType,
  ResolveKeyframes as MotionResolveKeyframes,
  ResolveLayoutTransition as MotionResolveLayoutTransition,
  ResolvedAnimationDefinition as MotionResolvedAnimationDefinition,
  ResolvedAnimationDefinitions as MotionResolvedAnimationDefinitions,
  ResolvedKeyframesTarget as MotionResolvedKeyframesTarget,
  ResolvedSingleTarget as MotionResolvedSingleTarget,
  ResolvedValueTarget as MotionResolvedValueTarget,
  ResolvedValues as MotionResolvedValues,
  SVGAttributesAsMotionValues,
  SVGKeyframesDefinition,
  SVGMotionProps,
  SVGPathKeyframesDefinition,
  SVGPathTransitions,
  SVGTransitions,
  ScrapeMotionValuesFromProps,
  ScrollMotionValues,
  Segment as MotionSegment,
  SequenceLabel as MotionSequenceLabel,
  SequenceLabelWithTime as MotionSequenceLabelWithTime,
  SequenceMap as MotionSequenceMap,
  SequenceOptions as MotionSequenceOptions,
  SequenceTime as MotionSequenceTime,
  SingleTarget as MotionSingleTarget,
  Spring as MotionSpring,
  SpringOptions as MotionSpringOptions,
  StyleKeyframesDefinition as MotionStyleKeyframesDefinition,
  StyleTransitions as MotionStyleTransitions,
  Subscriber as MotionSubscriber,
  TapHandlers as MotionTapHandlers,
  TapInfo as MotionTapInfo,
  Target as MotionTarget,
  TargetAndTransition as MotionTargetAndTransition,
  TransformPoint as MotionTransformPoint,
  Transition as MotionTransition,
  Tween as MotionTween,
  UnresolvedValueKeyframe as MotionUnresolvedValueKeyframe,
  UseInViewOptions as MotionUseInViewOptions,
  ValueAnimationOptions as MotionValueAnimationOptions,
  ValueAnimationTransition as MotionValueAnimationTransition,
  ValueKeyframe as MotionValueKeyframe,
  ValueKeyframesDefinition as MotionValueKeyframesDefinition,
  ValueSequence as MotionValueSequence,
  ValueTarget as MotionValueTarget,
  ValueType as MotionValueType,
  VariableKeyframesDefinition as MotionVariableKeyframesDefinition,
  VariableTransitions as MotionVariableTransitions,
  Variant as MotionVariant,
  VariantLabels as MotionVariantLabels,
  Variants as MotionVariants,
  VelocityOptions as MotionVelocityOptions,
  VisualState as MotionVisualState,
} from "framer-motion"

export type MotionAs = keyof typeof motion

type TargetResolver<Y = Dict> = (
  props: Y & MotionTransitionProperties,
) => TargetAndTransition

type Variant<Y = Dict> = TargetAndTransition | TargetResolver<Y>

export type MotionTransitionVariants<Y = Dict> = {
  enter: Variant<Y>
  exit: Variant<Y>
  initial?: Variant<Y>
}

export type MotionTransitionProperties = {
  /**
   * Custom `transition` definition for `enter` and `exit`.
   */
  transition?: MotionTransitionProps
  /**
   * Custom `transitionEnd` definition for `enter` and `exit`.
   */
  transitionEnd?: MotionTransitionEndProps
  /**
   * Custom `delay` definition for `enter` and `exit`.
   */
  delay?: number | MotionDelayProps
  /**
   * Custom `duration` definition for `enter` and `exit`.
   */
  duration?: number | MotionDurationProps
  /**
   * Custom `enter`.
   */
  enter?: any
  /**
   * Custom `exit`.
   */
  exit?: any
  /**
   * Custom `initial`.
   */
  initial?: any
}

type WithMotionProps<Y> = Partial<Record<"enter" | "exit", Y>>

export type MotionTransitionProps = WithMotionProps<Transition>

export type MotionTransitionEndProps = WithMotionProps<Target>

export type MotionDelayProps = WithMotionProps<number>

export type MotionDurationProps = WithMotionProps<number>

export type WithTransitionProps<Y extends object> = Omit<Y, "transition"> &
  MotionTransitionProperties & {
    /**
     * If `true`, the element will unmount when `isOpen={false}` and animation is done.
     */
    unmountOnExit?: boolean
    /**
     * Show the component. triggers when enter or exit states.
     */
    isOpen?: boolean
  }

export type MotionUIPropGetter<
  Y extends keyof ReactHTML = "div",
  M = undefined,
> = (
  props?: Merge<MotionProps<Y>, M>,
  ref?: Ref<any>,
) => MotionProps<Y> & RefAttributes<any>

export type RequiredMotionUIPropGetter<
  Y extends keyof ReactHTML = "div",
  M = undefined,
> = (
  props: Merge<MotionProps<Y>, M>,
  ref?: Ref<any>,
) => MotionProps<Y> & RefAttributes<any>
