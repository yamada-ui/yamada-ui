"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GraphHub as OriginalGraphHubIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GraphHubIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GraphHubIcon = component(Icon)({
  as: OriginalGraphHubIcon,
}) as Component<"svg", IconProps>
