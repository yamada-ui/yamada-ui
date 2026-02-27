"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Candy as OriginalCandyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CandyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CandyIcon = component(Icon)({
  as: OriginalCandyIcon,
}) as Component<"svg", IconProps>
