"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelLeftOpen as OriginalPanelLeftOpenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelLeftOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelLeftOpenIcon = component(Icon)({
  as: OriginalPanelLeftOpenIcon,
}) as Component<"svg", IconProps>
