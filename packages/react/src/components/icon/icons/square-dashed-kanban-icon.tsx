"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedKanban as OriginalSquareDashedKanbanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDashedKanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDashedKanbanIcon = component(Icon)({
  as: OriginalSquareDashedKanbanIcon,
}) as Component<"svg", IconProps>
