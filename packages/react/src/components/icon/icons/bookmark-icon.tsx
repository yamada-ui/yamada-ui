"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bookmark as OriginalBookmarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookmarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookmarkIcon = component(Icon)({
  as: OriginalBookmarkIcon,
}) as Component<"svg", IconProps>
