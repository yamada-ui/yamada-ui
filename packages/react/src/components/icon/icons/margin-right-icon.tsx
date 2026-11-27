"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MarginRight as OriginalMarginRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MarginRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MarginRightIcon = component(Icon)({
  as: OriginalMarginRightIcon,
}) as Component<"svg", IconProps>
