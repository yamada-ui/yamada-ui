"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Piano as OriginalPianoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PianoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PianoIcon = component(Icon)({
  as: OriginalPianoIcon,
}) as Component<"svg", IconProps>
