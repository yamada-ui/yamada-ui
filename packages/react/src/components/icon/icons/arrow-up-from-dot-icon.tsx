"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpFromDot as OriginalArrowUpFromDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUpFromDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUpFromDotIcon = component(Icon)({
  as: OriginalArrowUpFromDotIcon,
}) as Component<"svg", IconProps>
