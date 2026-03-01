"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DoorClosedLocked as OriginalDoorClosedLockedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DoorClosedLockedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DoorClosedLockedIcon = component(Icon)({
  as: OriginalDoorClosedLockedIcon,
}) as Component<"svg", IconProps>
