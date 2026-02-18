"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HeartMinus as OriginalHeartMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeartMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeartMinusIcon = component(Icon)({
  as: OriginalHeartMinusIcon,
}) as Component<"svg", IconProps>
