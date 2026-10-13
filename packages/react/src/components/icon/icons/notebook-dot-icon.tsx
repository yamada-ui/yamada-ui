"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { NotebookDot as OriginalNotebookDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NotebookDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NotebookDotIcon = component(Icon)({
  as: OriginalNotebookDotIcon,
}) as Component<"svg", IconProps>
