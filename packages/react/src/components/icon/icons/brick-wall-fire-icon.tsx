"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BrickWallFire as OriginalBrickWallFireIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BrickWallFireIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BrickWallFireIcon = component(Icon)({
  as: OriginalBrickWallFireIcon,
}) as Component<"svg", IconProps>
