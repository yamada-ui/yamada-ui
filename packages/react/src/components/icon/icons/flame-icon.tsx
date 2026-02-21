"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Flame as OriginalFlameIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlameIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlameIcon = component(Icon)({
  as: OriginalFlameIcon,
}) as Component<"svg", IconProps>
