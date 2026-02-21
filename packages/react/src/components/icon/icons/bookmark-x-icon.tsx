"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookmarkX as OriginalBookmarkXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookmarkXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookmarkXIcon = component(Icon)({
  as: OriginalBookmarkXIcon,
}) as Component<"svg", IconProps>
