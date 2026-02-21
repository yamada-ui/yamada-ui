"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookmarkPlus as OriginalBookmarkPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookmarkPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookmarkPlusIcon = component(Icon)({
  as: OriginalBookmarkPlusIcon,
}) as Component<"svg", IconProps>
