"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HikingStick as OriginalHikingStickIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HikingStickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HikingStickIcon = component(Icon)({
  as: OriginalHikingStickIcon,
}) as Component<"svg", IconProps>
