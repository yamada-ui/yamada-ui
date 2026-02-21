"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileSliders as OriginalFileSlidersIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileSlidersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileSlidersIcon = component(Icon)({
  as: OriginalFileSlidersIcon,
}) as Component<"svg", IconProps>
