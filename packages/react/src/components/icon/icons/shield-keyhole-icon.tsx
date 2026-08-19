"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldKeyhole as OriginalShieldKeyholeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldKeyholeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldKeyholeIcon = component(Icon)({
  as: OriginalShieldKeyholeIcon,
}) as Component<"svg", IconProps>
