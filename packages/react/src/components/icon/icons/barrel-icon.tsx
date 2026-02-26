"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Barrel as OriginalBarrelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BarrelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BarrelIcon = component(Icon)({
  as: OriginalBarrelIcon,
}) as Component<"svg", IconProps>
