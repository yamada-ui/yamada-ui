"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownAZ as OriginalArrowDownAZIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDownAZIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDownAZIcon = component(Icon)({
  as: OriginalArrowDownAZIcon,
}) as Component<"svg", IconProps>
