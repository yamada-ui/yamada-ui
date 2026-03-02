"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelsLeftBottom as OriginalPanelsLeftBottomIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelsLeftBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelsLeftBottomIcon = component(Icon)({
  as: OriginalPanelsLeftBottomIcon,
}) as Component<"svg", IconProps>
