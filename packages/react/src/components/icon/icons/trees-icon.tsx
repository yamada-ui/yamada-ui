"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Trees as OriginalTreesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TreesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TreesIcon = component(Icon)({
  as: OriginalTreesIcon,
}) as Component<"svg", IconProps>
