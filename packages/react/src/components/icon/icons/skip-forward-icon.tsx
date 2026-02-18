"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SkipForward as OriginalSkipForwardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SkipForwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SkipForwardIcon = component(Icon)({
  as: OriginalSkipForwardIcon,
}) as Component<"svg", IconProps>
