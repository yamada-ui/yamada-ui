"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Grid3x2 as OriginalGrid3x2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Grid3x2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Grid3x2Icon = component(Icon)({
  as: OriginalGrid3x2Icon,
}) as Component<"svg", IconProps>
