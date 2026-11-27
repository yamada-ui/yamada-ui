"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GraphRing as OriginalGraphRingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GraphRingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GraphRingIcon = component(Icon)({
  as: OriginalGraphRingIcon,
}) as Component<"svg", IconProps>
