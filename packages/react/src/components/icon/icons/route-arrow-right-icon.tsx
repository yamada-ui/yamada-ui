"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RouteArrowRight as OriginalRouteArrowRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RouteArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RouteArrowRightIcon = component(Icon)({
  as: OriginalRouteArrowRightIcon,
}) as Component<"svg", IconProps>
