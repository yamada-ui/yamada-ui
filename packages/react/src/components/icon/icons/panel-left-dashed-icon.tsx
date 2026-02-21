"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelLeftDashed as OriginalPanelLeftDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelLeftDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelLeftDashedIcon = component(Icon)({
  as: OriginalPanelLeftDashedIcon,
}) as Component<"svg", IconProps>
