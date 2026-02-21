"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WeightTilde as OriginalWeightTildeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WeightTildeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WeightTildeIcon = component(Icon)({
  as: OriginalWeightTildeIcon,
}) as Component<"svg", IconProps>
