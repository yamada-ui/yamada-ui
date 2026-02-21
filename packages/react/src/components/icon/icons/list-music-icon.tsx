"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListMusic as OriginalListMusicIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListMusicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListMusicIcon = component(Icon)({
  as: OriginalListMusicIcon,
}) as Component<"svg", IconProps>
