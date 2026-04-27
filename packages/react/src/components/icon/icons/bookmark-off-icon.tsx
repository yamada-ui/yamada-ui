"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookmarkOff as OriginalBookmarkOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookmarkOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookmarkOffIcon = component(Icon)({
  as: OriginalBookmarkOffIcon,
}) as Component<"svg", IconProps>
