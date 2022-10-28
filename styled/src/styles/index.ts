export * from './utils'
export * from './config'
export * from './pseudos'

import { background, BackgroundProps } from './background'
import { border, BorderProps } from './border'
import { color, ColorProps } from './color'
import { effect, EffectProps } from './effect'
import { filter, FilterProps } from './filter'
import { flex, FlexProps } from './flex'
import { grid, GridProps } from './grid'
import { interactivity, InteractivityProps } from './interactivity'
import { layout, LayoutProps } from './layout'
import { list, ListProps } from './list'
import { others, OthersProps } from './others'
import { position, PositionProps } from './position'
import { scroll, ScrollProps } from './scroll'
import { space, SpaceProps } from './space'
import { transform, TransformProps } from './transform'
import { transition, TransitionProps } from './transition'
import { typography, TypographyProps } from './typography'

export const styles = {
  ...layout,
  ...color,
  ...grid,
  ...flex,
  ...typography,
  ...list,
  ...scroll,
  ...position,
  ...background,
  ...space,
  ...transform,
  ...transition,
  ...filter,
  ...interactivity,
  ...effect,
  ...border,
  ...others,
}

export type StylesProps<Y = 'responsive', M = 'scheme'> = LayoutProps<Y, M> &
  ColorProps<Y, M> &
  GridProps<Y, M> &
  FlexProps<Y, M> &
  ScrollProps<Y, M> &
  ListProps<Y, M> &
  TypographyProps<Y, M> &
  PositionProps<Y, M> &
  BackgroundProps<Y, M> &
  SpaceProps<Y, M> &
  EffectProps<Y, M> &
  InteractivityProps<Y, M> &
  FilterProps<Y, M> &
  TransformProps<Y, M> &
  TransitionProps<Y, M> &
  BorderProps<Y, M> &
  OthersProps<Y, M>
