"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutPanelLeft as OriginalLayoutPanelLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayoutPanelLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayoutPanelLeftIcon = component(Icon)({
  as: OriginalLayoutPanelLeftIcon,
}) as Component<"svg", IconProps>
