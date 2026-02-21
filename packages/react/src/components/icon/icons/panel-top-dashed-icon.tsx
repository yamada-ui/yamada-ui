"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelTopDashed as OriginalPanelTopDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelTopDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelTopDashedIcon = component(Icon)({
  as: OriginalPanelTopDashedIcon,
}) as Component<"svg", IconProps>
