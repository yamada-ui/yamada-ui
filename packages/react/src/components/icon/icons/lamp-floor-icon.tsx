"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LampFloor as OriginalLampFloorIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LampFloorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LampFloorIcon = component(Icon)({
  as: OriginalLampFloorIcon,
}) as Component<"svg", IconProps>
