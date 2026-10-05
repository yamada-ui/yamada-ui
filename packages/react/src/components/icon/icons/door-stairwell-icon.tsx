"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DoorStairwell as OriginalDoorStairwellIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DoorStairwellIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DoorStairwellIcon = component(Icon)({
  as: OriginalDoorStairwellIcon,
}) as Component<"svg", IconProps>
