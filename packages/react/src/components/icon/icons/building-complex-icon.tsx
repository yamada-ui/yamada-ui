"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BuildingComplex as OriginalBuildingComplexIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BuildingComplexIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BuildingComplexIcon = component(Icon)({
  as: OriginalBuildingComplexIcon,
}) as Component<"svg", IconProps>
