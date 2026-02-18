"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pointer as OriginalPointerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PointerIcon = component(Icon)({
  as: OriginalPointerIcon,
}) as Component<"svg", IconProps>
