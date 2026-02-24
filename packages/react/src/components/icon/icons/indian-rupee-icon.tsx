"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { IndianRupee as OriginalIndianRupeeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `IndianRupeeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const IndianRupeeIcon = component(Icon)({
  as: OriginalIndianRupeeIcon,
}) as Component<"svg", IconProps>
