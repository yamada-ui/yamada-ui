"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Minimize as OriginalMinimizeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MinimizeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MinimizeIcon = component(Icon)({
  as: OriginalMinimizeIcon,
}) as Component<"svg", IconProps>
