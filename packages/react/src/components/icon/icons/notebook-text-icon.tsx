"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { NotebookText as OriginalNotebookTextIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NotebookTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NotebookTextIcon = component(Icon)({
  as: OriginalNotebookTextIcon,
}) as Component<"svg", IconProps>
