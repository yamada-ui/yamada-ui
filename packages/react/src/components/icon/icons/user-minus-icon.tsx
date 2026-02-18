"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserMinus as OriginalUserMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserMinusIcon = component(Icon)({
  as: OriginalUserMinusIcon,
}) as Component<"svg", IconProps>
