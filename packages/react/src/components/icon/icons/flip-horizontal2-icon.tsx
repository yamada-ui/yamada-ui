"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlipHorizontal2 as OriginalFlipHorizontal2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlipHorizontal2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlipHorizontal2Icon = component(Icon)({
  as: OriginalFlipHorizontal2Icon,
}) as Component<"svg", IconProps>
