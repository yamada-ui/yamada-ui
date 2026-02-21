"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DoorOpen as OriginalDoorOpenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DoorOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DoorOpenIcon = component(Icon)({
  as: OriginalDoorOpenIcon,
}) as Component<"svg", IconProps>
