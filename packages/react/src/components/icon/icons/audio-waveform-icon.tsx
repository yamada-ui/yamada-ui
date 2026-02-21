"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AudioWaveform as OriginalAudioWaveformIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AudioWaveformIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AudioWaveformIcon = component(Icon)({
  as: OriginalAudioWaveformIcon,
}) as Component<"svg", IconProps>
