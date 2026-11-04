"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EighthNote as OriginalEighthNoteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EighthNoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EighthNoteIcon = component(Icon)({
  as: OriginalEighthNoteIcon,
}) as Component<"svg", IconProps>
