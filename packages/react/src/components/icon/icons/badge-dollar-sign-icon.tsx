"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeDollarSign as OriginalBadgeDollarSignIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeDollarSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeDollarSignIcon = component(Icon)({
  as: OriginalBadgeDollarSignIcon,
}) as Component<"svg", IconProps>
