"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldCogCorner as OriginalShieldCogCornerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldCogCornerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldCogCornerIcon = component(Icon)({
  as: OriginalShieldCogCornerIcon,
}) as Component<"svg", IconProps>
