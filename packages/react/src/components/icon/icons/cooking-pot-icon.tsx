"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CookingPot as OriginalCookingPotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CookingPotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CookingPotIcon = component(Icon)({
  as: OriginalCookingPotIcon,
}) as Component<"svg", IconProps>
