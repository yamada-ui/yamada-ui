"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BeefOff as OriginalBeefOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BeefOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BeefOffIcon = component(Icon)({
  as: OriginalBeefOffIcon,
}) as Component<"svg", IconProps>
