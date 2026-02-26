"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownWideNarrow as OriginalArrowDownWideNarrowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDownWideNarrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDownWideNarrowIcon = component(Icon)({
  as: OriginalArrowDownWideNarrowIcon,
}) as Component<"svg", IconProps>
