"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dumbbell as OriginalDumbbellIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DumbbellIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DumbbellIcon = component(Icon)({
  as: OriginalDumbbellIcon,
}) as Component<"svg", IconProps>
