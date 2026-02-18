"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock7 as OriginalClock7Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock7Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock7Icon = component(Icon)({
  as: OriginalClock7Icon,
}) as Component<"svg", IconProps>
