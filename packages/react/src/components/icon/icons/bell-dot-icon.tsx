"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BellDot as OriginalBellDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BellDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BellDotIcon = component(Icon)({
  as: OriginalBellDotIcon,
}) as Component<"svg", IconProps>
