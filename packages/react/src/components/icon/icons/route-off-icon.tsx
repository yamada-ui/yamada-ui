"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RouteOff as OriginalRouteOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RouteOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RouteOffIcon = component(Icon)({
  as: OriginalRouteOffIcon,
}) as Component<"svg", IconProps>
