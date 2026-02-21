"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Diamond as OriginalDiamondIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DiamondIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DiamondIcon = component(Icon)({
  as: OriginalDiamondIcon,
}) as Component<"svg", IconProps>
