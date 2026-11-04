"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Screw as OriginalScrewIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScrewIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScrewIcon = component(Icon)({
  as: OriginalScrewIcon,
}) as Component<"svg", IconProps>
