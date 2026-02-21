"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudRain as OriginalCloudRainIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudRainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudRainIcon = component(Icon)({
  as: OriginalCloudRainIcon,
}) as Component<"svg", IconProps>
