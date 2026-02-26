"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LampWallUp as OriginalLampWallUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LampWallUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LampWallUpIcon = component(Icon)({
  as: OriginalLampWallUpIcon,
}) as Component<"svg", IconProps>
