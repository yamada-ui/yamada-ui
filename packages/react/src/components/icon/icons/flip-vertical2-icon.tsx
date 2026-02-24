"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlipVertical2 as OriginalFlipVertical2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlipVertical2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlipVertical2Icon = component(Icon)({
  as: OriginalFlipVertical2Icon,
}) as Component<"svg", IconProps>
