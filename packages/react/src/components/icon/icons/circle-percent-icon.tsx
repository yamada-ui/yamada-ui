"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CirclePercent as OriginalCirclePercentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CirclePercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CirclePercentIcon = component(Icon)({
  as: OriginalCirclePercentIcon,
}) as Component<"svg", IconProps>
