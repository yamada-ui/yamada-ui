"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ImagePlay as OriginalImagePlayIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ImagePlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ImagePlayIcon = component(Icon)({
  as: OriginalImagePlayIcon,
}) as Component<"svg", IconProps>
