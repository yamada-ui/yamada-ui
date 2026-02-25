"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PointerOff as OriginalPointerOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PointerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PointerOffIcon = component(Icon)({
  as: OriginalPointerOffIcon,
}) as Component<"svg", IconProps>
