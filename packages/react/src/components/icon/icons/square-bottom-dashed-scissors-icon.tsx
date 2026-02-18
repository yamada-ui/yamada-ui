"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareBottomDashedScissors as OriginalSquareBottomDashedScissorsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareBottomDashedScissorsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareBottomDashedScissorsIcon = component(Icon)({
  as: OriginalSquareBottomDashedScissorsIcon,
}) as Component<"svg", IconProps>
