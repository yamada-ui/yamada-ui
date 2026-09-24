"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GermOff as OriginalGermOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GermOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GermOffIcon = component(Icon)({
  as: OriginalGermOffIcon,
}) as Component<"svg", IconProps>
