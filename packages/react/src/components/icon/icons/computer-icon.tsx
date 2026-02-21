"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Computer as OriginalComputerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ComputerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ComputerIcon = component(Icon)({
  as: OriginalComputerIcon,
}) as Component<"svg", IconProps>
