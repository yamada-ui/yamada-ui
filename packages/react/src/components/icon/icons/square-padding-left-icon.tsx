"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePaddingLeft as OriginalSquarePaddingLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePaddingLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePaddingLeftIcon = component(Icon)({
  as: OriginalSquarePaddingLeftIcon,
}) as Component<"svg", IconProps>
