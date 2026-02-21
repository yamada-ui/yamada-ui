"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundMinus as OriginalUserRoundMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundMinusIcon = component(Icon)({
  as: OriginalUserRoundMinusIcon,
}) as Component<"svg", IconProps>
