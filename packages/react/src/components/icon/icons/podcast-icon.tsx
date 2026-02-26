"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Podcast as OriginalPodcastIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PodcastIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PodcastIcon = component(Icon)({
  as: OriginalPodcastIcon,
}) as Component<"svg", IconProps>
