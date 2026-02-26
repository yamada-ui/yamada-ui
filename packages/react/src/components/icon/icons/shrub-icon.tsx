"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Shrub as OriginalShrubIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShrubIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShrubIcon = component(Icon)({
  as: OriginalShrubIcon,
}) as Component<"svg", IconProps>
