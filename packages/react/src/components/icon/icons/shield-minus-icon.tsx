"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldMinus as OriginalShieldMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldMinusIcon = component(Icon)({
  as: OriginalShieldMinusIcon,
}) as Component<"svg", IconProps>
