"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PictureInPicture as OriginalPictureInPictureIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PictureInPictureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PictureInPictureIcon = component(Icon)({
  as: OriginalPictureInPictureIcon,
}) as Component<"svg", IconProps>
