"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Forward as OriginalForwardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ForwardIcon = component(Icon)({
  as: OriginalForwardIcon,
}) as Component<"svg", IconProps>
