"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Laser as OriginalLaserIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LaserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LaserIcon = component(Icon)({
  as: OriginalLaserIcon,
}) as Component<"svg", IconProps>
