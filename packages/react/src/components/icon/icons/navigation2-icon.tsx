"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Navigation2 as OriginalNavigation2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Navigation2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Navigation2Icon = component(Icon)({
  as: OriginalNavigation2Icon,
}) as Component<"svg", IconProps>
