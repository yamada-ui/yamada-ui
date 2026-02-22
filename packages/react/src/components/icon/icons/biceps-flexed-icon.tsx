"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BicepsFlexed as OriginalBicepsFlexedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BicepsFlexedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BicepsFlexedIcon = component(Icon)({
  as: OriginalBicepsFlexedIcon,
}) as Component<"svg", IconProps>
