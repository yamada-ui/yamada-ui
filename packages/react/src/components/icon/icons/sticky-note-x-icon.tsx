"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StickyNoteX as OriginalStickyNoteXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StickyNoteXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StickyNoteXIcon = component(Icon)({
  as: OriginalStickyNoteXIcon,
}) as Component<"svg", IconProps>
