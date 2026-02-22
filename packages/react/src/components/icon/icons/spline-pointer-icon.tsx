"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SplinePointer as OriginalSplinePointerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SplinePointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SplinePointerIcon = component(Icon)({
  as: OriginalSplinePointerIcon,
}) as Component<"svg", IconProps>
