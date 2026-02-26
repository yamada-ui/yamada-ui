"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DiscAlbum as OriginalDiscAlbumIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DiscAlbumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DiscAlbumIcon = component(Icon)({
  as: OriginalDiscAlbumIcon,
}) as Component<"svg", IconProps>
