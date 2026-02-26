"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareRadical as OriginalSquareRadicalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareRadicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareRadicalIcon = component(Icon)({
  as: OriginalSquareRadicalIcon,
}) as Component<"svg", IconProps>
