"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedMousePointer as OriginalSquareDashedMousePointerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDashedMousePointerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDashedMousePointerIcon = component(Icon)({
  as: OriginalSquareDashedMousePointerIcon,
}) as Component<"svg", IconProps>
