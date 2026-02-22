"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Shredder as OriginalShredderIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShredderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShredderIcon = component(Icon)({
  as: OriginalShredderIcon,
}) as Component<"svg", IconProps>
