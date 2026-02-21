"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock9 as OriginalClock9Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock9Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock9Icon = component(Icon)({
  as: OriginalClock9Icon,
}) as Component<"svg", IconProps>
