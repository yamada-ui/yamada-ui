"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StickyNoteOff as OriginalStickyNoteOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StickyNoteOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StickyNoteOffIcon = component(Icon)({
  as: OriginalStickyNoteOffIcon,
}) as Component<"svg", IconProps>
