"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Vegan as OriginalVeganIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VeganIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VeganIcon = component(Icon)({
  as: OriginalVeganIcon,
}) as Component<"svg", IconProps>
