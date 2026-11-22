"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundShield as OriginalUserRoundShieldIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundShieldIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundShieldIcon = component(Icon)({
  as: OriginalUserRoundShieldIcon,
}) as Component<"svg", IconProps>
