"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundGroup as OriginalUserRoundGroupIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundGroupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundGroupIcon = component(Icon)({
  as: OriginalUserRoundGroupIcon,
}) as Component<"svg", IconProps>
