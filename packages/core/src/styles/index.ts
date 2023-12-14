export * from "./utils"
export * from "./config"
export * from "./pseudos"

import type { BackgroundProps } from "./background"
import { background } from "./background"
import type { BorderProps } from "./border"
import { border } from "./border"
import type { ColorProps } from "./color"
import { color } from "./color"
import type { EffectProps } from "./effect"
import { effect } from "./effect"
import type { FilterProps } from "./filter"
import { filter } from "./filter"
import type { FlexProps } from "./flex"
import { flex } from "./flex"
import type { GridProps } from "./grid"
import { grid } from "./grid"
import type { InteractivityProps } from "./interactivity"
import { interactivity } from "./interactivity"
import type { LayoutProps } from "./layout"
import { layout } from "./layout"
import type { ListProps } from "./list"
import { list } from "./list"
import type { OthersProps } from "./others"
import { others } from "./others"
import type { PositionProps } from "./position"
import { position } from "./position"
import type { ScrollProps } from "./scroll"
import { scroll } from "./scroll"
import type { SpaceProps } from "./space"
import { space } from "./space"
import type { TransformProps } from "./transform"
import { transform } from "./transform"
import type { TransitionProps } from "./transition"
import { transition } from "./transition"
import type { TypographyProps } from "./typography"
import { typography } from "./typography"

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

export const stylesProperties: any[] = Object.keys(styles)

export const layoutStyle = {
  ...layout,
  ...grid,
  ...flex,
  ...space,
  ...position,
}

export const layoutStylesProperties: any[] = Object.keys(layoutStyle)

export type StyleProps = LayoutProps &
  ColorProps &
  GridProps &
  FlexProps &
  ScrollProps &
  ListProps &
  TypographyProps &
  PositionProps &
  BackgroundProps &
  SpaceProps &
  EffectProps &
  InteractivityProps &
  FilterProps &
  TransformProps &
  TransitionProps &
  BorderProps &
  OthersProps
