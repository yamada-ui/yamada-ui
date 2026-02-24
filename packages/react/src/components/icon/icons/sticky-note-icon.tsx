"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StickyNote as OriginalStickyNoteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StickyNoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StickyNoteIcon = component(Icon)({
  as: OriginalStickyNoteIcon,
}) as Component<"svg", IconProps>
