"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CloudSnow as OriginalCloudSnowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudSnowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudSnowIcon = component(Icon)({
  as: OriginalCloudSnowIcon,
}) as Component<"svg", IconProps>
