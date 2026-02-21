"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tablet as OriginalTabletIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TabletIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TabletIcon = component(Icon)({
  as: OriginalTabletIcon,
}) as Component<"svg", IconProps>
