"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StickyNoteCheck as OriginalStickyNoteCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StickyNoteCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StickyNoteCheckIcon = component(Icon)({
  as: OriginalStickyNoteCheckIcon,
}) as Component<"svg", IconProps>
