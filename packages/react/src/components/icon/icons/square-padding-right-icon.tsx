"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePaddingRight as OriginalSquarePaddingRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePaddingRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePaddingRightIcon = component(Icon)({
  as: OriginalSquarePaddingRightIcon,
}) as Component<"svg", IconProps>
