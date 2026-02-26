"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BetweenHorizontalEnd as OriginalBetweenHorizontalEndIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BetweenHorizontalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BetweenHorizontalEndIcon = component(Icon)({
  as: OriginalBetweenHorizontalEndIcon,
}) as Component<"svg", IconProps>
