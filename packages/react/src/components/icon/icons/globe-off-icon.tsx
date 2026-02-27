"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GlobeOff as OriginalGlobeOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GlobeOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GlobeOffIcon = component(Icon)({
  as: OriginalGlobeOffIcon,
}) as Component<"svg", IconProps>
