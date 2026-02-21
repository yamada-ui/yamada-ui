"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Popcorn as OriginalPopcornIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PopcornIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PopcornIcon = component(Icon)({
  as: OriginalPopcornIcon,
}) as Component<"svg", IconProps>
