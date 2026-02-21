"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MousePointer2 as OriginalMousePointer2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MousePointer2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MousePointer2Icon = component(Icon)({
  as: OriginalMousePointer2Icon,
}) as Component<"svg", IconProps>
