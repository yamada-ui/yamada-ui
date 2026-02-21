"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Kanban as OriginalKanbanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `KanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const KanbanIcon = component(Icon)({
  as: OriginalKanbanIcon,
}) as Component<"svg", IconProps>
