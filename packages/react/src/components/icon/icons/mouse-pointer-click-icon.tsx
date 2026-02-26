"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MousePointerClick as OriginalMousePointerClickIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MousePointerClickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MousePointerClickIcon = component(Icon)({
  as: OriginalMousePointerClickIcon,
}) as Component<"svg", IconProps>
