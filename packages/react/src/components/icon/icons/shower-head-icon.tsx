"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShowerHead as OriginalShowerHeadIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShowerHeadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShowerHeadIcon = component(Icon)({
  as: OriginalShowerHeadIcon,
}) as Component<"svg", IconProps>
