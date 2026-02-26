"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WavesArrowUp as OriginalWavesArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WavesArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WavesArrowUpIcon = component(Icon)({
  as: OriginalWavesArrowUpIcon,
}) as Component<"svg", IconProps>
