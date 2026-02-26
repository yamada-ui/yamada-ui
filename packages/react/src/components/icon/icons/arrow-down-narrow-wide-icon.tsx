"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownNarrowWide as OriginalArrowDownNarrowWideIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDownNarrowWideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDownNarrowWideIcon = component(Icon)({
  as: OriginalArrowDownNarrowWideIcon,
}) as Component<"svg", IconProps>
