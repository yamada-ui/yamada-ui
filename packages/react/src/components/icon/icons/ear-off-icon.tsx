"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EarOff as OriginalEarOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EarOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EarOffIcon = component(Icon)({
  as: OriginalEarOffIcon,
}) as Component<"svg", IconProps>
