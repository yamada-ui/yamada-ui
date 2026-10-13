"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GapHorizontal as OriginalGapHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GapHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GapHorizontalIcon = component(Icon)({
  as: OriginalGapHorizontalIcon,
}) as Component<"svg", IconProps>
