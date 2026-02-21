"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundPlus as OriginalUserRoundPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundPlusIcon = component(Icon)({
  as: OriginalUserRoundPlusIcon,
}) as Component<"svg", IconProps>
