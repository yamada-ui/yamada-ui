"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudRainWind as OriginalCloudRainWindIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudRainWindIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudRainWindIcon = component(Icon)({
  as: OriginalCloudRainWindIcon,
}) as Component<"svg", IconProps>
