"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelRightOpen as OriginalPanelRightOpenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelRightOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelRightOpenIcon = component(Icon)({
  as: OriginalPanelRightOpenIcon,
}) as Component<"svg", IconProps>
