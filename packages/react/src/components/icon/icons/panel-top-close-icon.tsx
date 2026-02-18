"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelTopClose as OriginalPanelTopCloseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelTopCloseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelTopCloseIcon = component(Icon)({
  as: OriginalPanelTopCloseIcon,
}) as Component<"svg", IconProps>
