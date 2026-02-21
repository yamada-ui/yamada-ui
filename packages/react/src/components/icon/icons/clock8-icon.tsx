"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock8 as OriginalClock8Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock8Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock8Icon = component(Icon)({
  as: OriginalClock8Icon,
}) as Component<"svg", IconProps>
