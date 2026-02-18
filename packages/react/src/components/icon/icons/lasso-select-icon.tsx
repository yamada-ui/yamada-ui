"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LassoSelect as OriginalLassoSelectIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LassoSelectIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LassoSelectIcon = component(Icon)({
  as: OriginalLassoSelectIcon,
}) as Component<"svg", IconProps>
