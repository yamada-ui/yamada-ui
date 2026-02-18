"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock10 as OriginalClock10Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock10Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock10Icon = component(Icon)({
  as: OriginalClock10Icon,
}) as Component<"svg", IconProps>
