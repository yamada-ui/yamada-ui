"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDimensions as OriginalSquareDimensionsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDimensionsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDimensionsIcon = component(Icon)({
  as: OriginalSquareDimensionsIcon,
}) as Component<"svg", IconProps>
