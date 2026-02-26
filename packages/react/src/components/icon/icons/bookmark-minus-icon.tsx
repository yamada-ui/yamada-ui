"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookmarkMinus as OriginalBookmarkMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookmarkMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookmarkMinusIcon = component(Icon)({
  as: OriginalBookmarkMinusIcon,
}) as Component<"svg", IconProps>
