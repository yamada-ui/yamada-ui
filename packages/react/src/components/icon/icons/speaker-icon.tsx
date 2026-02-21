"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Speaker as OriginalSpeakerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SpeakerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SpeakerIcon = component(Icon)({
  as: OriginalSpeakerIcon,
}) as Component<"svg", IconProps>
