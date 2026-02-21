"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Percent as OriginalPercentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PercentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PercentIcon = component(Icon)({
  as: OriginalPercentIcon,
}) as Component<"svg", IconProps>
