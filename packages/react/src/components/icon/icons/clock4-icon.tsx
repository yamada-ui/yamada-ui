"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock4 as OriginalClock4Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock4Icon = component(Icon)({
  as: OriginalClock4Icon,
}) as Component<"svg", IconProps>
