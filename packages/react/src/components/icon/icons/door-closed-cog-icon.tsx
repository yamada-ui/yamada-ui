"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DoorClosedCog as OriginalDoorClosedCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DoorClosedCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DoorClosedCogIcon = component(Icon)({
  as: OriginalDoorClosedCogIcon,
}) as Component<"svg", IconProps>
