"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Frame as OriginalFrameIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FrameIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FrameIcon = component(Icon)({
  as: OriginalFrameIcon,
}) as Component<"svg", IconProps>
