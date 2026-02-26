"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Figma as OriginalFigmaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FigmaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FigmaIcon = component(Icon)({
  as: OriginalFigmaIcon,
}) as Component<"svg", IconProps>
