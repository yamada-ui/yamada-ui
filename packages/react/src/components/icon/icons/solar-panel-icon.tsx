"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SolarPanel as OriginalSolarPanelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SolarPanelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SolarPanelIcon = component(Icon)({
  as: OriginalSolarPanelIcon,
}) as Component<"svg", IconProps>
