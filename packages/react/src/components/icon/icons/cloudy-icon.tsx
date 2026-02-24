"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cloudy as OriginalCloudyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudyIcon = component(Icon)({
  as: OriginalCloudyIcon,
}) as Component<"svg", IconProps>
