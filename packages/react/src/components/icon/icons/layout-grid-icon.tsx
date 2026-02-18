"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutGrid as OriginalLayoutGridIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayoutGridIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayoutGridIcon = component(Icon)({
  as: OriginalLayoutGridIcon,
}) as Component<"svg", IconProps>
