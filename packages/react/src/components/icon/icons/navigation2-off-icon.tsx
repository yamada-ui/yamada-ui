"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Navigation2Off as OriginalNavigation2OffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Navigation2OffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Navigation2OffIcon = component(Icon)({
  as: OriginalNavigation2OffIcon,
}) as Component<"svg", IconProps>
