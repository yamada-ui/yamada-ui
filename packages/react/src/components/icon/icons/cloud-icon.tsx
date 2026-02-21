"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cloud as OriginalCloudIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloudIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloudIcon = component(Icon)({
  as: OriginalCloudIcon,
}) as Component<"svg", IconProps>
