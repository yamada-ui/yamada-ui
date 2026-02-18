"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ImageUp as OriginalImageUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ImageUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ImageUpIcon = component(Icon)({
  as: OriginalImageUpIcon,
}) as Component<"svg", IconProps>
