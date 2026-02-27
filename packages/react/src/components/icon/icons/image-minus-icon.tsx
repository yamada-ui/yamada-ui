"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ImageMinus as OriginalImageMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ImageMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ImageMinusIcon = component(Icon)({
  as: OriginalImageMinusIcon,
}) as Component<"svg", IconProps>
