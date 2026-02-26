"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Youtube as OriginalYoutubeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `YoutubeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const YoutubeIcon = component(Icon)({
  as: OriginalYoutubeIcon,
}) as Component<"svg", IconProps>
