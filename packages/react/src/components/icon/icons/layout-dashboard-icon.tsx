"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutDashboard as OriginalLayoutDashboardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayoutDashboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayoutDashboardIcon = component(Icon)({
  as: OriginalLayoutDashboardIcon,
}) as Component<"svg", IconProps>
