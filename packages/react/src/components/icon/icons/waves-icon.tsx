"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Waves as OriginalWavesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WavesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WavesIcon = component(Icon)({
  as: OriginalWavesIcon,
}) as Component<"svg", IconProps>
