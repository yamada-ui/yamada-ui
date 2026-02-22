"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserPlus as OriginalUserPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserPlusIcon = component(Icon)({
  as: OriginalUserPlusIcon,
}) as Component<"svg", IconProps>
