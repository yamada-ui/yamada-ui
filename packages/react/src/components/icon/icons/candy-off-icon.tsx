"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CandyOff as OriginalCandyOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CandyOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CandyOffIcon = component(Icon)({
  as: OriginalCandyOffIcon,
}) as Component<"svg", IconProps>
