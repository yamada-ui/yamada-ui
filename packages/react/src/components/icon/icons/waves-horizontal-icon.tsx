"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WavesHorizontal as OriginalWavesHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WavesHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WavesHorizontalIcon = component(Icon)({
  as: OriginalWavesHorizontalIcon,
}) as Component<"svg", IconProps>
