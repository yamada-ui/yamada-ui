"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock5 as OriginalClock5Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock5Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock5Icon = component(Icon)({
  as: OriginalClock5Icon,
}) as Component<"svg", IconProps>
