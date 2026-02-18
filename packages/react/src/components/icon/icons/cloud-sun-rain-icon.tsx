"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudSunRain as OriginalCloudSunRainIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudSunRainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudSunRainIcon = component(Icon)({
  as: OriginalCloudSunRainIcon,
}) as Component<"svg", IconProps>
