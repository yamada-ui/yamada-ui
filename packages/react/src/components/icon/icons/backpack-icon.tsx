"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Backpack as OriginalBackpackIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BackpackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BackpackIcon = component(Icon)({
  as: OriginalBackpackIcon,
}) as Component<"svg", IconProps>
