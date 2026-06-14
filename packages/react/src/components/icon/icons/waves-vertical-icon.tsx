"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WavesVertical as OriginalWavesVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WavesVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WavesVerticalIcon = component(Icon)({
  as: OriginalWavesVerticalIcon,
}) as Component<"svg", IconProps>
