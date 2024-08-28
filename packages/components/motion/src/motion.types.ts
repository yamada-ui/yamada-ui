import type {
  ComponentArgs,
  ComponentMergeProps,
  StyledOptions,
  UIProps,
} from "@yamada-ui/core"
import type { Dict, Merge, MergeIfDefined } from "@yamada-ui/utils"
import type * as Motion from "framer-motion"
import type * as React from "react"

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
  HoverHandlers as MotionHoverHandlers,
  HydratedFeatureDefinition as MotionHydratedFeatureDefinition,
  HydratedFeatureDefinitions as MotionHydratedFeatureDefinitions,
  HTMLMotionProps,
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

export type MotionFactory = {
  <T extends MotionAs = MotionAs, M extends object = {}>(
    el: T,
    options?: StyledOptions,
  ): UIMotionComponent<T, M>
}

type ComponentProps<
  Y extends object,
  M extends object,
  D extends object,
  H extends MotionAs,
> = ComponentMergeProps<Y, M, D> & {
  as?: H
}

export type MotionComponent<Y extends MotionAs, M extends object = {}> = {
  <D extends MotionAs = Y>(
    props: ComponentProps<
      React.ComponentProps<Y>,
      React.ComponentProps<D>,
      M,
      D
    >,
  ): JSX.Element
} & ComponentArgs

export type MotionAs = keyof Motion.DOMMotionComponents

export type MotionComponents = {
  [Y in MotionAs]: MotionComponent<Y, MotionProps<Y>>
}

export type UIMotionComponent<
  Y extends MotionAs,
  M extends object = {},
> = MotionComponent<Y, Merge<UIMotionProps, M>>

type UIMotionProps = Merge<UIProps, Motion.MotionProps>

type FactoryAttributes<Y> =
  Y extends React.DetailedHTMLFactory<infer M, any>
    ? M
    : Y extends React.SVGFactory
      ? React.SVGAttributes<SVGElement>
      : never
type FactoryElement<Y> =
  Y extends React.DetailedHTMLFactory<any, infer M>
    ? M
    : Y extends React.SVGFactory
      ? SVGElement
      : never
type DOMAttributes<
  Y extends React.HTMLAttributes<M> | React.SVGAttributes<SVGElement>,
  M extends HTMLElement | SVGElement,
> = Y

export type MotionProps<Y extends MotionAs = "div"> = Merge<
  DOMAttributes<
    FactoryAttributes<React.ReactDOM[Y]>,
    FactoryElement<React.ReactDOM[Y]>
  >,
  UIMotionProps
> & {
  as?: MotionAs
}

export type MotionPropsWithoutChildren<Y extends MotionAs = "div"> = Omit<
  MotionProps<Y>,
  "children"
>

type TargetResolver<Y = Dict> = (
  props: Y & MotionTransitionProps,
) => Motion.TargetAndTransition

type Variant<Y = Dict> = Motion.TargetAndTransition | TargetResolver<Y>

export type MotionTransitionVariants<Y = Dict> = {
  enter: Variant<Y>
  exit: Variant<Y>
  initial?: Variant<Y>
}

type MotionLifecycleProps<Y> = Partial<Record<"enter" | "exit", Y>>

export type MotionTransitionProps = {
  /**
   * Custom `transition` definition for `enter` and `exit`.
   */
  transition?: MotionLifecycleProps<Motion.Transition>
  /**
   * Custom `transitionEnd` definition for `enter` and `exit`.
   */
  transitionEnd?: MotionLifecycleProps<Motion.Target>
  /**
   * Custom `delay` definition for `enter` and `exit`.
   */
  delay?: number | MotionLifecycleProps<number>
  /**
   * Custom `duration` definition for `enter` and `exit`.
   */
  duration?: number | MotionLifecycleProps<number>
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

export type WithTransitionProps<Y extends object> = Omit<Y, "transition"> &
  MotionTransitionProps & {
    /**
     * If `true`, the element will unmount when `isOpen={false}` and animation is done.
     */
    unmountOnExit?: boolean
    /**
     * Show the component. triggers when enter or exit states.
     */
    isOpen?: boolean
  }

export type MotionUIPropGetter<Y extends MotionAs = "div", M = undefined> = (
  props?: MergeIfDefined<MotionProps<Y>, M>,
  ref?: React.Ref<any>,
) => MotionProps<Y> & React.RefAttributes<any>

export type RequiredMotionUIPropGetter<
  Y extends MotionAs = "div",
  M = undefined,
> = (
  props: MergeIfDefined<MotionProps<Y>, M>,
  ref?: React.Ref<any>,
) => MotionProps<Y> & React.RefAttributes<any>
