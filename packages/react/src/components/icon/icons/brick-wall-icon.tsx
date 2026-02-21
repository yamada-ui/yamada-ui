"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BrickWall as OriginalBrickWallIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BrickWallIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BrickWallIcon = component(Icon)({
  as: OriginalBrickWallIcon,
}) as Component<"svg", IconProps>
