"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldAlert as OriginalShieldAlertIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldAlertIcon = component(Icon)({
  as: OriginalShieldAlertIcon,
}) as Component<"svg", IconProps>
