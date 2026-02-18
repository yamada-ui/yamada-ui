"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserX as OriginalUserXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserXIcon = component(Icon)({
  as: OriginalUserXIcon,
}) as Component<"svg", IconProps>
