"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpWideNarrow as OriginalArrowUpWideNarrowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUpWideNarrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUpWideNarrowIcon = component(Icon)({
  as: OriginalArrowUpWideNarrowIcon,
}) as Component<"svg", IconProps>
