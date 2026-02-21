"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Luggage as OriginalLuggageIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LuggageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LuggageIcon = component(Icon)({
  as: OriginalLuggageIcon,
}) as Component<"svg", IconProps>
