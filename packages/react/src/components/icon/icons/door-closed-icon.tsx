"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DoorClosed as OriginalDoorClosedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DoorClosedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DoorClosedIcon = component(Icon)({
  as: OriginalDoorClosedIcon,
}) as Component<"svg", IconProps>
