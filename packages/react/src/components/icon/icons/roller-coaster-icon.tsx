"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RollerCoaster as OriginalRollerCoasterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RollerCoasterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RollerCoasterIcon = component(Icon)({
  as: OriginalRollerCoasterIcon,
}) as Component<"svg", IconProps>
