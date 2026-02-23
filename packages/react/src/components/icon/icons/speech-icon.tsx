"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Speech as OriginalSpeechIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SpeechIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SpeechIcon = component(Icon)({
  as: OriginalSpeechIcon,
}) as Component<"svg", IconProps>
