"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UtensilsCrossed as OriginalUtensilsCrossedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UtensilsCrossedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UtensilsCrossedIcon = component(Icon)({
  as: OriginalUtensilsCrossedIcon,
}) as Component<"svg", IconProps>
