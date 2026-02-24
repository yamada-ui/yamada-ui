"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PictureInPicture2 as OriginalPictureInPicture2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PictureInPicture2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PictureInPicture2Icon = component(Icon)({
  as: OriginalPictureInPicture2Icon,
}) as Component<"svg", IconProps>
