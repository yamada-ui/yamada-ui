"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelsRightBottom as OriginalPanelsRightBottomIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelsRightBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelsRightBottomIcon = component(Icon)({
  as: OriginalPanelsRightBottomIcon,
}) as Component<"svg", IconProps>
