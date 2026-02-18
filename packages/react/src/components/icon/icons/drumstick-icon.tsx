"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Drumstick as OriginalDrumstickIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DrumstickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DrumstickIcon = component(Icon)({
  as: OriginalDrumstickIcon,
}) as Component<"svg", IconProps>
