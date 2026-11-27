"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePaddingBottom as OriginalSquarePaddingBottomIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePaddingBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePaddingBottomIcon = component(Icon)({
  as: OriginalSquarePaddingBottomIcon,
}) as Component<"svg", IconProps>
