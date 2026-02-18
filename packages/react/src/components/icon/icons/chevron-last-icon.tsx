"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronLast as OriginalChevronLastIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronLastIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronLastIcon = component(Icon)({
  as: OriginalChevronLastIcon,
}) as Component<"svg", IconProps>
