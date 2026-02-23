"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Users as OriginalUsersIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UsersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UsersIcon = component(Icon)({
  as: OriginalUsersIcon,
}) as Component<"svg", IconProps>
