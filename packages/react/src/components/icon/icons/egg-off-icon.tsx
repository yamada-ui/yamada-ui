"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EggOff as OriginalEggOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EggOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EggOffIcon = component(Icon)({
  as: OriginalEggOffIcon,
}) as Component<"svg", IconProps>
