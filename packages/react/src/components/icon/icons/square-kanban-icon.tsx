"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareKanban as OriginalSquareKanbanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareKanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareKanbanIcon = component(Icon)({
  as: OriginalSquareKanbanIcon,
}) as Component<"svg", IconProps>
