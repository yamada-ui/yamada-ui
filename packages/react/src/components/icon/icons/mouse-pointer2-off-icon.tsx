"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MousePointer2Off as OriginalMousePointer2OffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MousePointer2OffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MousePointer2OffIcon = component(Icon)({
  as: OriginalMousePointer2OffIcon,
}) as Component<"svg", IconProps>
