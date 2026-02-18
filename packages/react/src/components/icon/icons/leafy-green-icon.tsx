"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LeafyGreen as OriginalLeafyGreenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LeafyGreenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LeafyGreenIcon = component(Icon)({
  as: OriginalLeafyGreenIcon,
}) as Component<"svg", IconProps>
