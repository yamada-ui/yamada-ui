"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Group as OriginalGroupIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GroupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GroupIcon = component(Icon)({
  as: OriginalGroupIcon,
}) as Component<"svg", IconProps>
