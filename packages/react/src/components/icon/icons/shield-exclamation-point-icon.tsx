"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldExclamationPoint as OriginalShieldExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldExclamationPointIcon = component(Icon)({
  as: OriginalShieldExclamationPointIcon,
}) as Component<"svg", IconProps>
