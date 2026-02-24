"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GalleryThumbnails as OriginalGalleryThumbnailsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GalleryThumbnailsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GalleryThumbnailsIcon = component(Icon)({
  as: OriginalGalleryThumbnailsIcon,
}) as Component<"svg", IconProps>
