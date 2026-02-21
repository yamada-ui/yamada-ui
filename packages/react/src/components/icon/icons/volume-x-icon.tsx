"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { VolumeX as OriginalVolumeXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VolumeXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VolumeXIcon = component(Icon)({
  as: OriginalVolumeXIcon,
}) as Component<"svg", IconProps>
