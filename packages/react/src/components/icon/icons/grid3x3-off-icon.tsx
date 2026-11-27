"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Grid3x3Off as OriginalGrid3x3OffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Grid3x3OffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Grid3x3OffIcon = component(Icon)({
  as: OriginalGrid3x3OffIcon,
}) as Component<"svg", IconProps>
