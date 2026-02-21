"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clover as OriginalCloverIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CloverIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CloverIcon = component(Icon)({
  as: OriginalCloverIcon,
}) as Component<"svg", IconProps>
