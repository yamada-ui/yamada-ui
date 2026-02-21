"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Building as OriginalBuildingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BuildingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BuildingIcon = component(Icon)({
  as: OriginalBuildingIcon,
}) as Component<"svg", IconProps>
