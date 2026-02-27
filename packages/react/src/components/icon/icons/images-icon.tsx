"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Images as OriginalImagesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ImagesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ImagesIcon = component(Icon)({
  as: OriginalImagesIcon,
}) as Component<"svg", IconProps>
