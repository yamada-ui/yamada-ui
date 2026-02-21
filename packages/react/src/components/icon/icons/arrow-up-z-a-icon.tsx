"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpZA as OriginalArrowUpZAIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUpZAIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUpZAIcon = component(Icon)({
  as: OriginalArrowUpZAIcon,
}) as Component<"svg", IconProps>
