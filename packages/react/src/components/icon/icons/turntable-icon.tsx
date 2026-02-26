"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Turntable as OriginalTurntableIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TurntableIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TurntableIcon = component(Icon)({
  as: OriginalTurntableIcon,
}) as Component<"svg", IconProps>
