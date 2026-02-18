"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquircleDashed as OriginalSquircleDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquircleDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquircleDashedIcon = component(Icon)({
  as: OriginalSquircleDashedIcon,
}) as Component<"svg", IconProps>
