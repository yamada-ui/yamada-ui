"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CartonOff as OriginalCartonOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CartonOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CartonOffIcon = component(Icon)({
  as: OriginalCartonOffIcon,
}) as Component<"svg", IconProps>
