"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleDollarSign as OriginalCircleDollarSignIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleDollarSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleDollarSignIcon = component(Icon)({
  as: OriginalCircleDollarSignIcon,
}) as Component<"svg", IconProps>
