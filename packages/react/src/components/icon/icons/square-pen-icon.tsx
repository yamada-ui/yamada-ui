"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePen as OriginalSquarePenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePenIcon = component(Icon)({
  as: OriginalSquarePenIcon,
}) as Component<"svg", IconProps>
