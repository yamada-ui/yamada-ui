"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SlidersVertical as OriginalSlidersVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SlidersVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SlidersVerticalIcon = component(Icon)({
  as: OriginalSlidersVerticalIcon,
}) as Component<"svg", IconProps>
