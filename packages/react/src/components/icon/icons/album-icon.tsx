"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Album as OriginalAlbumIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlbumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlbumIcon = component(Icon)({
  as: OriginalAlbumIcon,
}) as Component<"svg", IconProps>
