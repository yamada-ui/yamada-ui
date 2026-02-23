"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { VolumeOff as OriginalVolumeOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VolumeOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VolumeOffIcon = component(Icon)({
  as: OriginalVolumeOffIcon,
}) as Component<"svg", IconProps>
