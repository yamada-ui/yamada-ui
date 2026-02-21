"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Weight as OriginalWeightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WeightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WeightIcon = component(Icon)({
  as: OriginalWeightIcon,
}) as Component<"svg", IconProps>
