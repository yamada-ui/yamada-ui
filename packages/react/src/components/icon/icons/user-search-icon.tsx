"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserSearch as OriginalUserSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserSearchIcon = component(Icon)({
  as: OriginalUserSearchIcon,
}) as Component<"svg", IconProps>
