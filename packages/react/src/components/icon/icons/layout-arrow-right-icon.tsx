"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutArrowRight as OriginalLayoutArrowRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayoutArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayoutArrowRightIcon = component(Icon)({
  as: OriginalLayoutArrowRightIcon,
}) as Component<"svg", IconProps>
