"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Guitar as OriginalGuitarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GuitarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GuitarIcon = component(Icon)({
  as: OriginalGuitarIcon,
}) as Component<"svg", IconProps>
