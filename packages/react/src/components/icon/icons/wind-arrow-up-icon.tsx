"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WindArrowUp as OriginalWindArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WindArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WindArrowUpIcon = component(Icon)({
  as: OriginalWindArrowUpIcon,
}) as Component<"svg", IconProps>
