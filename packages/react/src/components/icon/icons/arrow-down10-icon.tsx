"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDown10 as OriginalArrowDown10Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDown10Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDown10Icon = component(Icon)({
  as: OriginalArrowDown10Icon,
}) as Component<"svg", IconProps>
