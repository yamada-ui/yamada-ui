"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Contrast as OriginalContrastIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ContrastIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ContrastIcon = component(Icon)({
  as: OriginalContrastIcon,
}) as Component<"svg", IconProps>
