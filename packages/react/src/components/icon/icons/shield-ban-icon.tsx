"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldBan as OriginalShieldBanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldBanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldBanIcon = component(Icon)({
  as: OriginalShieldBanIcon,
}) as Component<"svg", IconProps>
