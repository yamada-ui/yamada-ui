"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelTopOpen as OriginalPanelTopOpenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelTopOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelTopOpenIcon = component(Icon)({
  as: OriginalPanelTopOpenIcon,
}) as Component<"svg", IconProps>
