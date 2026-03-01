"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelBottom as OriginalPanelBottomIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelBottomIcon = component(Icon)({
  as: OriginalPanelBottomIcon,
}) as Component<"svg", IconProps>
