"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutFreeform as OriginalLayoutFreeformIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayoutFreeformIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayoutFreeformIcon = component(Icon)({
  as: OriginalLayoutFreeformIcon,
}) as Component<"svg", IconProps>
