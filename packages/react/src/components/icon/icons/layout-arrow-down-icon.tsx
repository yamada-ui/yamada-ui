"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutArrowDown as OriginalLayoutArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayoutArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayoutArrowDownIcon = component(Icon)({
  as: OriginalLayoutArrowDownIcon,
}) as Component<"svg", IconProps>
