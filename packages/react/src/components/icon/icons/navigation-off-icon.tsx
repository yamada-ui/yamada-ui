"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { NavigationOff as OriginalNavigationOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NavigationOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NavigationOffIcon = component(Icon)({
  as: OriginalNavigationOffIcon,
}) as Component<"svg", IconProps>
