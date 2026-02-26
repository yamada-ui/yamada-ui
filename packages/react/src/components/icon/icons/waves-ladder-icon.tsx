"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WavesLadder as OriginalWavesLadderIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WavesLadderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WavesLadderIcon = component(Icon)({
  as: OriginalWavesLadderIcon,
}) as Component<"svg", IconProps>
