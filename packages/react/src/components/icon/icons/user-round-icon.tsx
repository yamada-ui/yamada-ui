"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRound as OriginalUserRoundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundIcon = component(Icon)({
  as: OriginalUserRoundIcon,
}) as Component<"svg", IconProps>
