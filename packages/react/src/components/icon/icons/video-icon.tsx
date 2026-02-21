"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Video as OriginalVideoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VideoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VideoIcon = component(Icon)({
  as: OriginalVideoIcon,
}) as Component<"svg", IconProps>
