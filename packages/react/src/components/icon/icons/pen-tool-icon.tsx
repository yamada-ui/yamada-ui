"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PenTool as OriginalPenToolIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PenToolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PenToolIcon = component(Icon)({
  as: OriginalPenToolIcon,
}) as Component<"svg", IconProps>
