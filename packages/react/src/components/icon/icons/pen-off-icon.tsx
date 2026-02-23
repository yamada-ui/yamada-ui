"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PenOff as OriginalPenOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PenOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PenOffIcon = component(Icon)({
  as: OriginalPenOffIcon,
}) as Component<"svg", IconProps>
