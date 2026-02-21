"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Scroll as OriginalScrollIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScrollIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScrollIcon = component(Icon)({
  as: OriginalScrollIcon,
}) as Component<"svg", IconProps>
