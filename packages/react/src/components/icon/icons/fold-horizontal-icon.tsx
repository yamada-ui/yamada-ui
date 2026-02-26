"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FoldHorizontal as OriginalFoldHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FoldHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FoldHorizontalIcon = component(Icon)({
  as: OriginalFoldHorizontalIcon,
}) as Component<"svg", IconProps>
