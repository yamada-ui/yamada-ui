"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpLeft as OriginalArrowUpLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUpLeftIcon = component(Icon)({
  as: OriginalArrowUpLeftIcon,
}) as Component<"svg", IconProps>
