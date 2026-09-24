"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserGroup as OriginalUserGroupIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserGroupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserGroupIcon = component(Icon)({
  as: OriginalUserGroupIcon,
}) as Component<"svg", IconProps>
