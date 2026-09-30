"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AudioLinesX as OriginalAudioLinesXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AudioLinesXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AudioLinesXIcon = component(Icon)({
  as: OriginalAudioLinesXIcon,
}) as Component<"svg", IconProps>
