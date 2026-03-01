"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FunnelX as OriginalFunnelXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FunnelXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FunnelXIcon = component(Icon)({
  as: OriginalFunnelXIcon,
}) as Component<"svg", IconProps>
