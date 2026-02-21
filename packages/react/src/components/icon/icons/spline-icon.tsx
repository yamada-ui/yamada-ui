"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Spline as OriginalSplineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SplineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SplineIcon = component(Icon)({
  as: OriginalSplineIcon,
}) as Component<"svg", IconProps>
