"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FolderKanban as OriginalFolderKanbanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FolderKanbanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FolderKanbanIcon = component(Icon)({
  as: OriginalFolderKanbanIcon,
}) as Component<"svg", IconProps>
