"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TubeLotion as OriginalTubeLotionIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TubeLotionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TubeLotionIcon = component(Icon)({
  as: OriginalTubeLotionIcon,
}) as Component<"svg", IconProps>
