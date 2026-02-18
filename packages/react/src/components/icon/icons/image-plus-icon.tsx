"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ImagePlus as OriginalImagePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ImagePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ImagePlusIcon = component(Icon)({
  as: OriginalImagePlusIcon,
}) as Component<"svg", IconProps>
