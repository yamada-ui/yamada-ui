"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Route as OriginalRouteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RouteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RouteIcon = component(Icon)({
  as: OriginalRouteIcon,
}) as Component<"svg", IconProps>
