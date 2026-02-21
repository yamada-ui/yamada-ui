"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelBottomClose as OriginalPanelBottomCloseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelBottomCloseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelBottomCloseIcon = component(Icon)({
  as: OriginalPanelBottomCloseIcon,
}) as Component<"svg", IconProps>
