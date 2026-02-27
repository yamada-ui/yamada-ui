"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bubbles as OriginalBubblesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BubblesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BubblesIcon = component(Icon)({
  as: OriginalBubblesIcon,
}) as Component<"svg", IconProps>
