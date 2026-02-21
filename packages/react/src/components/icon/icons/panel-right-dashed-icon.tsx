"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelRightDashed as OriginalPanelRightDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelRightDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelRightDashedIcon = component(Icon)({
  as: OriginalPanelRightDashedIcon,
}) as Component<"svg", IconProps>
