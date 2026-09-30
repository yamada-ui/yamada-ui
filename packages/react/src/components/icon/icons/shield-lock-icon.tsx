"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldLock as OriginalShieldLockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldLockIcon = component(Icon)({
  as: OriginalShieldLockIcon,
}) as Component<"svg", IconProps>
