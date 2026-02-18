"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ConciergeBell as OriginalConciergeBellIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ConciergeBellIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ConciergeBellIcon = component(Icon)({
  as: OriginalConciergeBellIcon,
}) as Component<"svg", IconProps>
