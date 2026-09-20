"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TrianglesCenterlineDashedHorizontal as OriginalTrianglesCenterlineDashedHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrianglesCenterlineDashedHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrianglesCenterlineDashedHorizontalIcon = component(Icon)({
  as: OriginalTrianglesCenterlineDashedHorizontalIcon,
}) as Component<"svg", IconProps>
