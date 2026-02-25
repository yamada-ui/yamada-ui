"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelTopBottomDashed as OriginalPanelTopBottomDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelTopBottomDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelTopBottomDashedIcon = component(Icon)({
  as: OriginalPanelTopBottomDashedIcon,
}) as Component<"svg", IconProps>
