"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpDown as OriginalArrowUpDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUpDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUpDownIcon = component(Icon)({
  as: OriginalArrowUpDownIcon,
}) as Component<"svg", IconProps>
