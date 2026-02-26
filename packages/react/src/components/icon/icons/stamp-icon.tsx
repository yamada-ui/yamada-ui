"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Stamp as OriginalStampIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StampIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StampIcon = component(Icon)({
  as: OriginalStampIcon,
}) as Component<"svg", IconProps>
