"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Lollipop as OriginalLollipopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LollipopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LollipopIcon = component(Icon)({
  as: OriginalLollipopIcon,
}) as Component<"svg", IconProps>
