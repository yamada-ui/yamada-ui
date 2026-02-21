"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldPlus as OriginalShieldPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldPlusIcon = component(Icon)({
  as: OriginalShieldPlusIcon,
}) as Component<"svg", IconProps>
