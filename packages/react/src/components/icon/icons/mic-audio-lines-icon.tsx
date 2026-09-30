"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MicAudioLines as OriginalMicAudioLinesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MicAudioLinesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MicAudioLinesIcon = component(Icon)({
  as: OriginalMicAudioLinesIcon,
}) as Component<"svg", IconProps>
