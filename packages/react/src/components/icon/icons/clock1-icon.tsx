"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock1 as OriginalClock1Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock1Icon = component(Icon)({
  as: OriginalClock1Icon,
}) as Component<"svg", IconProps>
