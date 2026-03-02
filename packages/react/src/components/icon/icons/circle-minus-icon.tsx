"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleMinus as OriginalCircleMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleMinusIcon = component(Icon)({
  as: OriginalCircleMinusIcon,
}) as Component<"svg", IconProps>
