"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BusFront as OriginalBusFrontIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BusFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BusFrontIcon = component(Icon)({
  as: OriginalBusFrontIcon,
}) as Component<"svg", IconProps>
