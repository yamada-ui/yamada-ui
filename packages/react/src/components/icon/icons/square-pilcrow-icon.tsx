"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePilcrow as OriginalSquarePilcrowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePilcrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePilcrowIcon = component(Icon)({
  as: OriginalSquarePilcrowIcon,
}) as Component<"svg", IconProps>
