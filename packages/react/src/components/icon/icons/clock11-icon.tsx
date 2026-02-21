"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock11 as OriginalClock11Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock11Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock11Icon = component(Icon)({
  as: OriginalClock11Icon,
}) as Component<"svg", IconProps>
