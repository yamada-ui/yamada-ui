"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldHalf as OriginalShieldHalfIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldHalfIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldHalfIcon = component(Icon)({
  as: OriginalShieldHalfIcon,
}) as Component<"svg", IconProps>
