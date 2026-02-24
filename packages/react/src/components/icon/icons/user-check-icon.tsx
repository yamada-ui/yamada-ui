"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserCheck as OriginalUserCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserCheckIcon = component(Icon)({
  as: OriginalUserCheckIcon,
}) as Component<"svg", IconProps>
