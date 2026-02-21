"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlipVertical as OriginalFlipVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlipVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlipVerticalIcon = component(Icon)({
  as: OriginalFlipVerticalIcon,
}) as Component<"svg", IconProps>
