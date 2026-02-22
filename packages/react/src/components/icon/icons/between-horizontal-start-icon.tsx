"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BetweenHorizontalStart as OriginalBetweenHorizontalStartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BetweenHorizontalStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BetweenHorizontalStartIcon = component(Icon)({
  as: OriginalBetweenHorizontalStartIcon,
}) as Component<"svg", IconProps>
