"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FishingRod as OriginalFishingRodIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FishingRodIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FishingRodIcon = component(Icon)({
  as: OriginalFishingRodIcon,
}) as Component<"svg", IconProps>
