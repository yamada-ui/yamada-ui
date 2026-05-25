"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Broccoli as OriginalBroccoliIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BroccoliIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BroccoliIcon = component(Icon)({
  as: OriginalBroccoliIcon,
}) as Component<"svg", IconProps>
