"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpAZ as OriginalArrowUpAZIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUpAZIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUpAZIcon = component(Icon)({
  as: OriginalArrowUpAZIcon,
}) as Component<"svg", IconProps>
