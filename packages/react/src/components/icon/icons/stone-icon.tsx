"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Stone as OriginalStoneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StoneIcon = component(Icon)({
  as: OriginalStoneIcon,
}) as Component<"svg", IconProps>
