"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Notebook as OriginalNotebookIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NotebookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NotebookIcon = component(Icon)({
  as: OriginalNotebookIcon,
}) as Component<"svg", IconProps>
