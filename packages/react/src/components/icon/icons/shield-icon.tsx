"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Shield as OriginalShieldIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldIcon = component(Icon)({
  as: OriginalShieldIcon,
}) as Component<"svg", IconProps>
