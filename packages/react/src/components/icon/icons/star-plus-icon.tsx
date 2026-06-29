"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StarPlus as OriginalStarPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StarPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StarPlusIcon = component(Icon)({
  as: OriginalStarPlusIcon,
}) as Component<"svg", IconProps>
