"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelRight as OriginalPanelRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelRightIcon = component(Icon)({
  as: OriginalPanelRightIcon,
}) as Component<"svg", IconProps>
