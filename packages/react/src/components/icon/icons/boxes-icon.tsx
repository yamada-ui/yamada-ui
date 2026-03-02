"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Boxes as OriginalBoxesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BoxesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BoxesIcon = component(Icon)({
  as: OriginalBoxesIcon,
}) as Component<"svg", IconProps>
