"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock3 as OriginalClock3Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock3Icon = component(Icon)({
  as: OriginalClock3Icon,
}) as Component<"svg", IconProps>
