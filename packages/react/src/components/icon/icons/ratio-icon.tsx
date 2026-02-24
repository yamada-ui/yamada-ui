"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ratio as OriginalRatioIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RatioIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RatioIcon = component(Icon)({
  as: OriginalRatioIcon,
}) as Component<"svg", IconProps>
