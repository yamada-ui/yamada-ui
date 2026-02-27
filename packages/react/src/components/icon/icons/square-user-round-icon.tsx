"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareUserRound as OriginalSquareUserRoundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareUserRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareUserRoundIcon = component(Icon)({
  as: OriginalSquareUserRoundIcon,
}) as Component<"svg", IconProps>
