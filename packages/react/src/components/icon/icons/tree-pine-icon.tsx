"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TreePine as OriginalTreePineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TreePineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TreePineIcon = component(Icon)({
  as: OriginalTreePineIcon,
}) as Component<"svg", IconProps>
