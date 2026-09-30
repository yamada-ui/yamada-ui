"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StickyNotes as OriginalStickyNotesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StickyNotesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StickyNotesIcon = component(Icon)({
  as: OriginalStickyNotesIcon,
}) as Component<"svg", IconProps>
