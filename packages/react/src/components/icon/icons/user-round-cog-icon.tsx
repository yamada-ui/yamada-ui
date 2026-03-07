"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundCog as OriginalUserRoundCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundCogIcon = component(Icon)({
  as: OriginalUserRoundCogIcon,
}) as Component<"svg", IconProps>
