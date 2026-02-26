"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AudioLines as OriginalAudioLinesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AudioLinesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AudioLinesIcon = component(Icon)({
  as: OriginalAudioLinesIcon,
}) as Component<"svg", IconProps>
