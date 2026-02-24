"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelBottomOpen as OriginalPanelBottomOpenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelBottomOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelBottomOpenIcon = component(Icon)({
  as: OriginalPanelBottomOpenIcon,
}) as Component<"svg", IconProps>
