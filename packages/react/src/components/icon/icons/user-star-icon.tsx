"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserStar as OriginalUserStarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserStarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserStarIcon = component(Icon)({
  as: OriginalUserStarIcon,
}) as Component<"svg", IconProps>
