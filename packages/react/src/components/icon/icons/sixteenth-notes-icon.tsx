"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SixteenthNotes as OriginalSixteenthNotesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SixteenthNotesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SixteenthNotesIcon = component(Icon)({
  as: OriginalSixteenthNotesIcon,
}) as Component<"svg", IconProps>
