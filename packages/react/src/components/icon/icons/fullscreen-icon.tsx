"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Fullscreen as OriginalFullscreenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FullscreenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FullscreenIcon = component(Icon)({
  as: OriginalFullscreenIcon,
}) as Component<"svg", IconProps>
