"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { NotebookPen as OriginalNotebookPenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NotebookPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NotebookPenIcon = component(Icon)({
  as: OriginalNotebookPenIcon,
}) as Component<"svg", IconProps>
