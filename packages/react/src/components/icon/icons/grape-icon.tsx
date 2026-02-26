"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Grape as OriginalGrapeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GrapeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GrapeIcon = component(Icon)({
  as: OriginalGrapeIcon,
}) as Component<"svg", IconProps>
