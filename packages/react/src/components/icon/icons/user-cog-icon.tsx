"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserCog as OriginalUserCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserCogIcon = component(Icon)({
  as: OriginalUserCogIcon,
}) as Component<"svg", IconProps>
