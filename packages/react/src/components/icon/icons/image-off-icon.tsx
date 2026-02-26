"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ImageOff as OriginalImageOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ImageOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ImageOffIcon = component(Icon)({
  as: OriginalImageOffIcon,
}) as Component<"svg", IconProps>
