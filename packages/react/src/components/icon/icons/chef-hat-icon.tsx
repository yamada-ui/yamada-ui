"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChefHat as OriginalChefHatIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChefHatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChefHatIcon = component(Icon)({
  as: OriginalChefHatIcon,
}) as Component<"svg", IconProps>
