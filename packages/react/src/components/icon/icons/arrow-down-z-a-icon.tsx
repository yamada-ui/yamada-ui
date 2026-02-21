"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownZA as OriginalArrowDownZAIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDownZAIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDownZAIcon = component(Icon)({
  as: OriginalArrowDownZAIcon,
}) as Component<"svg", IconProps>
