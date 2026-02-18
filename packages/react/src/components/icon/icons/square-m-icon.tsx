"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareM as OriginalSquareMIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareMIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareMIcon = component(Icon)({
  as: OriginalSquareMIcon,
}) as Component<"svg", IconProps>
