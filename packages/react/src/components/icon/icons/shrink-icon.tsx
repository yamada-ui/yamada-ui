"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Shrink as OriginalShrinkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShrinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShrinkIcon = component(Icon)({
  as: OriginalShrinkIcon,
}) as Component<"svg", IconProps>
