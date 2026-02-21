"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EggFried as OriginalEggFriedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EggFriedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EggFriedIcon = component(Icon)({
  as: OriginalEggFriedIcon,
}) as Component<"svg", IconProps>
