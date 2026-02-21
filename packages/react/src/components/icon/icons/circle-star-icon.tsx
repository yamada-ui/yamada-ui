"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleStar as OriginalCircleStarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleStarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleStarIcon = component(Icon)({
  as: OriginalCircleStarIcon,
}) as Component<"svg", IconProps>
