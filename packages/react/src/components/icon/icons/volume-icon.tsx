"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Volume as OriginalVolumeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VolumeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VolumeIcon = component(Icon)({
  as: OriginalVolumeIcon,
}) as Component<"svg", IconProps>
