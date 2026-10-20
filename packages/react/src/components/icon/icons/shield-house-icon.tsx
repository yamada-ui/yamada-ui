"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldHouse as OriginalShieldHouseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldHouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldHouseIcon = component(Icon)({
  as: OriginalShieldHouseIcon,
}) as Component<"svg", IconProps>
