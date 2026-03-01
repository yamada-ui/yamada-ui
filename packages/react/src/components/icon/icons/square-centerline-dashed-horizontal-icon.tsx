"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareCenterlineDashedHorizontal as OriginalSquareCenterlineDashedHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareCenterlineDashedHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareCenterlineDashedHorizontalIcon = component(Icon)({
  as: OriginalSquareCenterlineDashedHorizontalIcon,
}) as Component<"svg", IconProps>
