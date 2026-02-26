"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUp10 as OriginalArrowUp10Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUp10Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUp10Icon = component(Icon)({
  as: OriginalArrowUp10Icon,
}) as Component<"svg", IconProps>
