"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DiagramFlowHorizontal as OriginalDiagramFlowHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DiagramFlowHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DiagramFlowHorizontalIcon = component(Icon)({
  as: OriginalDiagramFlowHorizontalIcon,
}) as Component<"svg", IconProps>
