"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GalleryVertical as OriginalGalleryVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GalleryVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GalleryVerticalIcon = component(Icon)({
  as: OriginalGalleryVerticalIcon,
}) as Component<"svg", IconProps>
