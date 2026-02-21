"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BrickWallShield as OriginalBrickWallShieldIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BrickWallShieldIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BrickWallShieldIcon = component(Icon)({
  as: OriginalBrickWallShieldIcon,
}) as Component<"svg", IconProps>
