"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldX as OriginalShieldXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldXIcon = component(Icon)({
  as: OriginalShieldXIcon,
}) as Component<"svg", IconProps>
