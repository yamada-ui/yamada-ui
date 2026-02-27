"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sandwich as OriginalSandwichIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SandwichIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SandwichIcon = component(Icon)({
  as: OriginalSandwichIcon,
}) as Component<"svg", IconProps>
