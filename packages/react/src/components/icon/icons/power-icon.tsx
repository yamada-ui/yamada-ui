"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Power as OriginalPowerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PowerIcon = component(Icon)({
  as: OriginalPowerIcon,
}) as Component<"svg", IconProps>
