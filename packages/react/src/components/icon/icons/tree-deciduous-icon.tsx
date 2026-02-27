"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TreeDeciduous as OriginalTreeDeciduousIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TreeDeciduousIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TreeDeciduousIcon = component(Icon)({
  as: OriginalTreeDeciduousIcon,
}) as Component<"svg", IconProps>
