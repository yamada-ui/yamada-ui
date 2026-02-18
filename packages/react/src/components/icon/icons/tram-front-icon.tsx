"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TramFront as OriginalTramFrontIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TramFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TramFrontIcon = component(Icon)({
  as: OriginalTramFrontIcon,
}) as Component<"svg", IconProps>
