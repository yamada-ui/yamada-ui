"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock12 as OriginalClock12Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock12Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock12Icon = component(Icon)({
  as: OriginalClock12Icon,
}) as Component<"svg", IconProps>
