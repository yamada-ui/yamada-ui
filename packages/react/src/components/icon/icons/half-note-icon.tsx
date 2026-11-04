"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HalfNote as OriginalHalfNoteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HalfNoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HalfNoteIcon = component(Icon)({
  as: OriginalHalfNoteIcon,
}) as Component<"svg", IconProps>
