"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoveDiagonal2 as OriginalMoveDiagonal2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoveDiagonal2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoveDiagonal2Icon = component(Icon)({
  as: OriginalMoveDiagonal2Icon,
}) as Component<"svg", IconProps>
