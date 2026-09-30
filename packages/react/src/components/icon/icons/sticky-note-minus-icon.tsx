"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StickyNoteMinus as OriginalStickyNoteMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StickyNoteMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StickyNoteMinusIcon = component(Icon)({
  as: OriginalStickyNoteMinusIcon,
}) as Component<"svg", IconProps>
