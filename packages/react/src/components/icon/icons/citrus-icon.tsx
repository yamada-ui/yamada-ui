"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Citrus as OriginalCitrusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CitrusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CitrusIcon = component(Icon)({
  as: OriginalCitrusIcon,
}) as Component<"svg", IconProps>
