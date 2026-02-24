"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GalleryHorizontalEnd as OriginalGalleryHorizontalEndIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GalleryHorizontalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GalleryHorizontalEndIcon = component(Icon)({
  as: OriginalGalleryHorizontalEndIcon,
}) as Component<"svg", IconProps>
