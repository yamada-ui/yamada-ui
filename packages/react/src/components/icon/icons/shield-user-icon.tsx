"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldUser as OriginalShieldUserIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldUserIcon = component(Icon)({
  as: OriginalShieldUserIcon,
}) as Component<"svg", IconProps>
