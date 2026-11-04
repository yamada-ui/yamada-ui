"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserShield as OriginalUserShieldIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserShieldIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserShieldIcon = component(Icon)({
  as: OriginalUserShieldIcon,
}) as Component<"svg", IconProps>
