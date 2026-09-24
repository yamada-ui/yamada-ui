"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PlantPot as OriginalPlantPotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlantPotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlantPotIcon = component(Icon)({
  as: OriginalPlantPotIcon,
}) as Component<"svg", IconProps>
