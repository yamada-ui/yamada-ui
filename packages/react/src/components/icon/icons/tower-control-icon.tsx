"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TowerControl as OriginalTowerControlIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TowerControlIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TowerControlIcon = component(Icon)({
  as: OriginalTowerControlIcon,
}) as Component<"svg", IconProps>
