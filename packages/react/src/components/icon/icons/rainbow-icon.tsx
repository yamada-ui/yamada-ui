"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Rainbow as OriginalRainbowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RainbowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RainbowIcon = component(Icon)({
  as: OriginalRainbowIcon,
}) as Component<"svg", IconProps>
