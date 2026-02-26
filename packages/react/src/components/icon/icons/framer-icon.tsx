"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Framer as OriginalFramerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FramerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FramerIcon = component(Icon)({
  as: OriginalFramerIcon,
}) as Component<"svg", IconProps>
