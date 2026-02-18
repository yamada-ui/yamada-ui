"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldCheck as OriginalShieldCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldCheckIcon = component(Icon)({
  as: OriginalShieldCheckIcon,
}) as Component<"svg", IconProps>
