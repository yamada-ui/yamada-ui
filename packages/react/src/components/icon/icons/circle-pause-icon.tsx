"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CirclePause as OriginalCirclePauseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CirclePauseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CirclePauseIcon = component(Icon)({
  as: OriginalCirclePauseIcon,
}) as Component<"svg", IconProps>
