"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Syringe as OriginalSyringeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SyringeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SyringeIcon = component(Icon)({
  as: OriginalSyringeIcon,
}) as Component<"svg", IconProps>
