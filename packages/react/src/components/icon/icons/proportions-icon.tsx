"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Proportions as OriginalProportionsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ProportionsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ProportionsIcon = component(Icon)({
  as: OriginalProportionsIcon,
}) as Component<"svg", IconProps>
