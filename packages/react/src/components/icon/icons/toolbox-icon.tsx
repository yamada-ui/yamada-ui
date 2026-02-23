"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Toolbox as OriginalToolboxIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ToolboxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ToolboxIcon = component(Icon)({
  as: OriginalToolboxIcon,
}) as Component<"svg", IconProps>
