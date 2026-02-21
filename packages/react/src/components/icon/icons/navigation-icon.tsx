"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Navigation as OriginalNavigationIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NavigationIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NavigationIcon = component(Icon)({
  as: OriginalNavigationIcon,
}) as Component<"svg", IconProps>
