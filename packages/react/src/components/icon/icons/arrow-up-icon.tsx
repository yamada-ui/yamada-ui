"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUp as OriginalArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUpIcon = component(Icon)({
  as: OriginalArrowUpIcon,
}) as Component<"svg", IconProps>
