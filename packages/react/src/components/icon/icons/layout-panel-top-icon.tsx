"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutPanelTop as OriginalLayoutPanelTopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayoutPanelTopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayoutPanelTopIcon = component(Icon)({
  as: OriginalLayoutPanelTopIcon,
}) as Component<"svg", IconProps>
