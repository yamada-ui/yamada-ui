"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePaddingTop as OriginalSquarePaddingTopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePaddingTopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePaddingTopIcon = component(Icon)({
  as: OriginalSquarePaddingTopIcon,
}) as Component<"svg", IconProps>
