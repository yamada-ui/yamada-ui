"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePadding as OriginalSquarePaddingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePaddingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePaddingIcon = component(Icon)({
  as: OriginalSquarePaddingIcon,
}) as Component<"svg", IconProps>
