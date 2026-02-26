"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Wallpaper as OriginalWallpaperIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WallpaperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WallpaperIcon = component(Icon)({
  as: OriginalWallpaperIcon,
}) as Component<"svg", IconProps>
