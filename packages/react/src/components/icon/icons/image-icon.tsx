"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Image as OriginalImageIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ImageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ImageIcon = component(Icon)({
  as: OriginalImageIcon,
}) as Component<"svg", IconProps>
