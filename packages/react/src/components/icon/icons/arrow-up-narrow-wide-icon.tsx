"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpNarrowWide as OriginalArrowUpNarrowWideIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUpNarrowWideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUpNarrowWideIcon = component(Icon)({
  as: OriginalArrowUpNarrowWideIcon,
}) as Component<"svg", IconProps>
