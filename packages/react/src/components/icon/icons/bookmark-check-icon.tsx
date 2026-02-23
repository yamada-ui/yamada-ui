"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookmarkCheck as OriginalBookmarkCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookmarkCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookmarkCheckIcon = component(Icon)({
  as: OriginalBookmarkCheckIcon,
}) as Component<"svg", IconProps>
