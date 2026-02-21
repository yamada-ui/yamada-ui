"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Music as OriginalMusicIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MusicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MusicIcon = component(Icon)({
  as: OriginalMusicIcon,
}) as Component<"svg", IconProps>
