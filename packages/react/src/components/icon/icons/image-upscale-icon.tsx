"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ImageUpscale as OriginalImageUpscaleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ImageUpscaleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ImageUpscaleIcon = component(Icon)({
  as: OriginalImageUpscaleIcon,
}) as Component<"svg", IconProps>
