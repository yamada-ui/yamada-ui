"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TrianglesCenterlineDashedVertical as OriginalTrianglesCenterlineDashedVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrianglesCenterlineDashedVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrianglesCenterlineDashedVerticalIcon = component(Icon)({
  as: OriginalTrianglesCenterlineDashedVerticalIcon,
}) as Component<"svg", IconProps>
