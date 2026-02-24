"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundX as OriginalUserRoundXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundXIcon = component(Icon)({
  as: OriginalUserRoundXIcon,
}) as Component<"svg", IconProps>
