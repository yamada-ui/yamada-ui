"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WindArrowDown as OriginalWindArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WindArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WindArrowDownIcon = component(Icon)({
  as: OriginalWindArrowDownIcon,
}) as Component<"svg", IconProps>
