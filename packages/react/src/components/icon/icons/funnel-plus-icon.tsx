"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FunnelPlus as OriginalFunnelPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FunnelPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FunnelPlusIcon = component(Icon)({
  as: OriginalFunnelPlusIcon,
}) as Component<"svg", IconProps>
