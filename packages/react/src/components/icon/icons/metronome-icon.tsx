"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Metronome as OriginalMetronomeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MetronomeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MetronomeIcon = component(Icon)({
  as: OriginalMetronomeIcon,
}) as Component<"svg", IconProps>
