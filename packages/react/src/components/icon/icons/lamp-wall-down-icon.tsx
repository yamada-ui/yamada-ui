"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LampWallDown as OriginalLampWallDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LampWallDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LampWallDownIcon = component(Icon)({
  as: OriginalLampWallDownIcon,
}) as Component<"svg", IconProps>
