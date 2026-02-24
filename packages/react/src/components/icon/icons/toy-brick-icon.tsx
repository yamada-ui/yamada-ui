"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ToyBrick as OriginalToyBrickIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ToyBrickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ToyBrickIcon = component(Icon)({
  as: OriginalToyBrickIcon,
}) as Component<"svg", IconProps>
