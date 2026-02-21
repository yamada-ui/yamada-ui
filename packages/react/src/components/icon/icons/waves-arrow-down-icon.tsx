"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WavesArrowDown as OriginalWavesArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WavesArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WavesArrowDownIcon = component(Icon)({
  as: OriginalWavesArrowDownIcon,
}) as Component<"svg", IconProps>
