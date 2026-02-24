"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AArrowUp as OriginalAArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AArrowUpIcon = component(Icon)({
  as: OriginalAArrowUpIcon,
}) as Component<"svg", IconProps>
