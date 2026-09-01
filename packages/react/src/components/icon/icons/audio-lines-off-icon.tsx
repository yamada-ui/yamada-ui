"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AudioLinesOff as OriginalAudioLinesOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AudioLinesOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AudioLinesOffIcon = component(Icon)({
  as: OriginalAudioLinesOffIcon,
}) as Component<"svg", IconProps>
