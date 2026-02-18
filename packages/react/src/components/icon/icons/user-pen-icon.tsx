"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserPen as OriginalUserPenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserPenIcon = component(Icon)({
  as: OriginalUserPenIcon,
}) as Component<"svg", IconProps>
