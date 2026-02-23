"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RockingChair as OriginalRockingChairIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RockingChairIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RockingChairIcon = component(Icon)({
  as: OriginalRockingChairIcon,
}) as Component<"svg", IconProps>
