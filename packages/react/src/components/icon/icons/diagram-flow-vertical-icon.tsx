"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DiagramFlowVertical as OriginalDiagramFlowVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DiagramFlowVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DiagramFlowVerticalIcon = component(Icon)({
  as: OriginalDiagramFlowVerticalIcon,
}) as Component<"svg", IconProps>
