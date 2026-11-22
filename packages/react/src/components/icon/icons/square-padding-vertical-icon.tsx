"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePaddingVertical as OriginalSquarePaddingVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePaddingVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePaddingVerticalIcon = component(Icon)({
  as: OriginalSquarePaddingVerticalIcon,
}) as Component<"svg", IconProps>
