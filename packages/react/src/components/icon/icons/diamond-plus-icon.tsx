"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DiamondPlus as OriginalDiamondPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DiamondPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DiamondPlusIcon = component(Icon)({
  as: OriginalDiamondPlusIcon,
}) as Component<"svg", IconProps>
