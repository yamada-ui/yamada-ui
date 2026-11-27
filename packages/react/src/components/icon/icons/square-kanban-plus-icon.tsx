"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareKanbanPlus as OriginalSquareKanbanPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareKanbanPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareKanbanPlusIcon = component(Icon)({
  as: OriginalSquareKanbanPlusIcon,
}) as Component<"svg", IconProps>
