"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LandPlot as OriginalLandPlotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LandPlotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LandPlotIcon = component(Icon)({
  as: OriginalLandPlotIcon,
}) as Component<"svg", IconProps>
