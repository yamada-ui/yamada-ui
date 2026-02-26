"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BellMinus as OriginalBellMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BellMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BellMinusIcon = component(Icon)({
  as: OriginalBellMinusIcon,
}) as Component<"svg", IconProps>
