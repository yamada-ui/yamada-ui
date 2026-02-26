"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BellRing as OriginalBellRingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BellRingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BellRingIcon = component(Icon)({
  as: OriginalBellRingIcon,
}) as Component<"svg", IconProps>
