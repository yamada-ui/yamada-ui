import { Dict } from '@yamada-ui/utils'
import type { Target, TargetAndTransition, Transition } from 'framer-motion'

type TargetResolver<Y = Dict> = (props: Y & MotionTransitionProperties) => TargetAndTransition

type Variant<Y = Dict> = TargetAndTransition | TargetResolver<Y>

export type MotionVariants<Y = Dict> = {
  enter: Variant<Y>
  exit: Variant<Y>
  initial?: Variant<Y>
}

export type MotionTransitionProperties = {
  transition?: MotionTransitionProps
  transitionEnd?: MotionTransitionEndProps
  delay?: number | MotionDelayProps
}

type WithMotionProps<Y> = Partial<Record<'enter' | 'exit', Y>>

export type MotionTransitionProps = WithMotionProps<Transition>

export type MotionTransitionEndProps = WithMotionProps<Target>

export type MotionDelayProps = WithMotionProps<number>

export type WithTransitionProps<Y extends object> = Omit<Y, 'transition'> &
  MotionTransitionProperties & {
    unmountOnExit?: boolean
    isOpen?: boolean
  }
