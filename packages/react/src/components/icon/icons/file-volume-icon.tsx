"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileVolume as OriginalFileVolumeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileVolumeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileVolumeIcon = component(Icon)({
  as: OriginalFileVolumeIcon,
}) as Component<"svg", IconProps>
