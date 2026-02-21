"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpRight as OriginalArrowUpRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUpRightIcon = component(Icon)({
  as: OriginalArrowUpRightIcon,
}) as Component<"svg", IconProps>
