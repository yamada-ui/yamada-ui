"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WineOff as OriginalWineOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WineOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WineOffIcon = component(Icon)({
  as: OriginalWineOffIcon,
}) as Component<"svg", IconProps>
