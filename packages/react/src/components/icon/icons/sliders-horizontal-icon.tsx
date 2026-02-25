"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SlidersHorizontal as OriginalSlidersHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SlidersHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SlidersHorizontalIcon = component(Icon)({
  as: OriginalSlidersHorizontalIcon,
}) as Component<"svg", IconProps>
