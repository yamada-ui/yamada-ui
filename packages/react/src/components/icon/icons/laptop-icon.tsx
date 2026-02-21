"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Laptop as OriginalLaptopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LaptopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LaptopIcon = component(Icon)({
  as: OriginalLaptopIcon,
}) as Component<"svg", IconProps>
