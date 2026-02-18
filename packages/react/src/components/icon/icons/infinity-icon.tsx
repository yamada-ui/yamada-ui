"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Infinity as OriginalInfinityIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `InfinityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const InfinityIcon = component(Icon)({
  as: OriginalInfinityIcon,
}) as Component<"svg", IconProps>
