"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Carrot as OriginalCarrotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CarrotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CarrotIcon = component(Icon)({
  as: OriginalCarrotIcon,
}) as Component<"svg", IconProps>
