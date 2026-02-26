"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelBottomDashed as OriginalPanelBottomDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelBottomDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelBottomDashedIcon = component(Icon)({
  as: OriginalPanelBottomDashedIcon,
}) as Component<"svg", IconProps>
