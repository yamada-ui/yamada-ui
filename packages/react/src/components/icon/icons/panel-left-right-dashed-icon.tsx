"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelLeftRightDashed as OriginalPanelLeftRightDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelLeftRightDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelLeftRightDashedIcon = component(Icon)({
  as: OriginalPanelLeftRightDashedIcon,
}) as Component<"svg", IconProps>
