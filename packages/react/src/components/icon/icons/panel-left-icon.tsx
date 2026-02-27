"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelLeft as OriginalPanelLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelLeftIcon = component(Icon)({
  as: OriginalPanelLeftIcon,
}) as Component<"svg", IconProps>
