"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Hammer as OriginalHammerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HammerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HammerIcon = component(Icon)({
  as: OriginalHammerIcon,
}) as Component<"svg", IconProps>
