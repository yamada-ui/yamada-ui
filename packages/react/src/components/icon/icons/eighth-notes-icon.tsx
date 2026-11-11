"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EighthNotes as OriginalEighthNotesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EighthNotesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EighthNotesIcon = component(Icon)({
  as: OriginalEighthNotesIcon,
}) as Component<"svg", IconProps>
