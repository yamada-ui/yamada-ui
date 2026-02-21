"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LampDesk as OriginalLampDeskIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LampDeskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LampDeskIcon = component(Icon)({
  as: OriginalLampDeskIcon,
}) as Component<"svg", IconProps>
