"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudMoonRain as OriginalCloudMoonRainIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudMoonRainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudMoonRainIcon = component(Icon)({
  as: OriginalCloudMoonRainIcon,
}) as Component<"svg", IconProps>
