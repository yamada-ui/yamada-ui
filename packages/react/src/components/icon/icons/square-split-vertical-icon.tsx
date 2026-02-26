"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareSplitVertical as OriginalSquareSplitVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareSplitVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareSplitVerticalIcon = component(Icon)({
  as: OriginalSquareSplitVerticalIcon,
}) as Component<"svg", IconProps>
