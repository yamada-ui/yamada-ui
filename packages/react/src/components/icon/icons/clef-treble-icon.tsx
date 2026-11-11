"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ClefTreble as OriginalClefTrebleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClefTrebleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClefTrebleIcon = component(Icon)({
  as: OriginalClefTrebleIcon,
}) as Component<"svg", IconProps>
