"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Fence as OriginalFenceIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FenceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FenceIcon = component(Icon)({
  as: OriginalFenceIcon,
}) as Component<"svg", IconProps>
