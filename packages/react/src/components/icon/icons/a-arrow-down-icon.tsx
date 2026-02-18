"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AArrowDown as OriginalAArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AArrowDownIcon = component(Icon)({
  as: OriginalAArrowDownIcon,
}) as Component<"svg", IconProps>
