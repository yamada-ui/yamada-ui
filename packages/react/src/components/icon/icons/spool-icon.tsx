"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Spool as OriginalSpoolIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SpoolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SpoolIcon = component(Icon)({
  as: OriginalSpoolIcon,
}) as Component<"svg", IconProps>
