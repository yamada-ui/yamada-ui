"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldOff as OriginalShieldOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldOffIcon = component(Icon)({
  as: OriginalShieldOffIcon,
}) as Component<"svg", IconProps>
