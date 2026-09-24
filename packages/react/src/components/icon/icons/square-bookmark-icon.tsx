"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareBookmark as OriginalSquareBookmarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareBookmarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareBookmarkIcon = component(Icon)({
  as: OriginalSquareBookmarkIcon,
}) as Component<"svg", IconProps>
