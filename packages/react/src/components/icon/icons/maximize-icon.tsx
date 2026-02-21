"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Maximize as OriginalMaximizeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MaximizeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MaximizeIcon = component(Icon)({
  as: OriginalMaximizeIcon,
}) as Component<"svg", IconProps>
