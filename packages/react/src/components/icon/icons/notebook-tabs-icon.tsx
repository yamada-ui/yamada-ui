"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { NotebookTabs as OriginalNotebookTabsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NotebookTabsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NotebookTabsIcon = component(Icon)({
  as: OriginalNotebookTabsIcon,
}) as Component<"svg", IconProps>
