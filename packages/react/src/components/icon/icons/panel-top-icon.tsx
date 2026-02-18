"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelTop as OriginalPanelTopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelTopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelTopIcon = component(Icon)({
  as: OriginalPanelTopIcon,
}) as Component<"svg", IconProps>
