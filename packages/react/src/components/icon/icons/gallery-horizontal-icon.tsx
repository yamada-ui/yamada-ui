"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GalleryHorizontal as OriginalGalleryHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GalleryHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GalleryHorizontalIcon = component(Icon)({
  as: OriginalGalleryHorizontalIcon,
}) as Component<"svg", IconProps>
