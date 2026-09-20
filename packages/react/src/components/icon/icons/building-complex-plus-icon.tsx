"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BuildingComplexPlus as OriginalBuildingComplexPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BuildingComplexPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BuildingComplexPlusIcon = component(Icon)({
  as: OriginalBuildingComplexPlusIcon,
}) as Component<"svg", IconProps>
