"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundStar as OriginalUserRoundStarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundStarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundStarIcon = component(Icon)({
  as: OriginalUserRoundStarIcon,
}) as Component<"svg", IconProps>
