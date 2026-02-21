"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ImageDown as OriginalImageDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ImageDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ImageDownIcon = component(Icon)({
  as: OriginalImageDownIcon,
}) as Component<"svg", IconProps>
