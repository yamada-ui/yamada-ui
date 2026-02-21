"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Snail as OriginalSnailIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SnailIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SnailIcon = component(Icon)({
  as: OriginalSnailIcon,
}) as Component<"svg", IconProps>
