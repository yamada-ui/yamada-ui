"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookAudio as OriginalBookAudioIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookAudioIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookAudioIcon = component(Icon)({
  as: OriginalBookAudioIcon,
}) as Component<"svg", IconProps>
