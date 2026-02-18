"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Blinds as OriginalBlindsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BlindsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BlindsIcon = component(Icon)({
  as: OriginalBlindsIcon,
}) as Component<"svg", IconProps>
