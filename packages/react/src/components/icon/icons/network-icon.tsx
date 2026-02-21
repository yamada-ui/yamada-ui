"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Network as OriginalNetworkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NetworkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NetworkIcon = component(Icon)({
  as: OriginalNetworkIcon,
}) as Component<"svg", IconProps>
