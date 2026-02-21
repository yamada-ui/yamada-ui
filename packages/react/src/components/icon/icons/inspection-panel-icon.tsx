"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { InspectionPanel as OriginalInspectionPanelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `InspectionPanelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const InspectionPanelIcon = component(Icon)({
  as: OriginalInspectionPanelIcon,
}) as Component<"svg", IconProps>
