"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Shovel as OriginalShovelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShovelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShovelIcon = component(Icon)({
  as: OriginalShovelIcon,
}) as Component<"svg", IconProps>
