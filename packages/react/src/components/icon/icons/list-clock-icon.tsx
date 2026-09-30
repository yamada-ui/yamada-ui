"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListClock as OriginalListClockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListClockIcon = component(Icon)({
  as: OriginalListClockIcon,
}) as Component<"svg", IconProps>
