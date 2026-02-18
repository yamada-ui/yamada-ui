"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Strikethrough as OriginalStrikethroughIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StrikethroughIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StrikethroughIcon = component(Icon)({
  as: OriginalStrikethroughIcon,
}) as Component<"svg", IconProps>
