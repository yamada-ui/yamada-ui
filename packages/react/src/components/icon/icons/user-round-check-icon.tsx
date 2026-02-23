"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundCheck as OriginalUserRoundCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundCheckIcon = component(Icon)({
  as: OriginalUserRoundCheckIcon,
}) as Component<"svg", IconProps>
