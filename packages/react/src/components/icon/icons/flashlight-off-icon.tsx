"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlashlightOff as OriginalFlashlightOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlashlightOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlashlightOffIcon = component(Icon)({
  as: OriginalFlashlightOffIcon,
}) as Component<"svg", IconProps>
