"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TentTree as OriginalTentTreeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TentTreeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TentTreeIcon = component(Icon)({
  as: OriginalTentTreeIcon,
}) as Component<"svg", IconProps>
