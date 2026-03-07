"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Funnel as OriginalFunnelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FunnelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FunnelIcon = component(Icon)({
  as: OriginalFunnelIcon,
}) as Component<"svg", IconProps>
