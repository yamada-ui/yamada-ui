"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MousePointer as OriginalMousePointerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MousePointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MousePointerIcon = component(Icon)({
  as: OriginalMousePointerIcon,
}) as Component<"svg", IconProps>
