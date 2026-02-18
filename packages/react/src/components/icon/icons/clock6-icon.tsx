"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock6 as OriginalClock6Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock6Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock6Icon = component(Icon)({
  as: OriginalClock6Icon,
}) as Component<"svg", IconProps>
