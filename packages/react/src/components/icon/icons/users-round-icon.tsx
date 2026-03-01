"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UsersRound as OriginalUsersRoundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UsersRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UsersRoundIcon = component(Icon)({
  as: OriginalUsersRoundIcon,
}) as Component<"svg", IconProps>
