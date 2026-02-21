"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GalleryVerticalEnd as OriginalGalleryVerticalEndIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GalleryVerticalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GalleryVerticalEndIcon = component(Icon)({
  as: OriginalGalleryVerticalEndIcon,
}) as Component<"svg", IconProps>
