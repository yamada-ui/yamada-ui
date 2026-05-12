"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldCog as OriginalShieldCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldCogIcon = component(Icon)({
  as: OriginalShieldCogIcon,
}) as Component<"svg", IconProps>
