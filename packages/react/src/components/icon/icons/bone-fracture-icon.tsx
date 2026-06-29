"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BoneFracture as OriginalBoneFractureIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BoneFractureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BoneFractureIcon = component(Icon)({
  as: OriginalBoneFractureIcon,
}) as Component<"svg", IconProps>
