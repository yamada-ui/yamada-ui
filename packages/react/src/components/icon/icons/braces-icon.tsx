"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Braces as OriginalBracesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BracesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BracesIcon = component(Icon)({
  as: OriginalBracesIcon,
}) as Component<"svg", IconProps>
