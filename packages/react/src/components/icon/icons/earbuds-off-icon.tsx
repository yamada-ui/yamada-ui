"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EarbudsOff as OriginalEarbudsOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EarbudsOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EarbudsOffIcon = component(Icon)({
  as: OriginalEarbudsOffIcon,
}) as Component<"svg", IconProps>
