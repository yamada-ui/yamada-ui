"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookBookmark as OriginalBookBookmarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookBookmarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookBookmarkIcon = component(Icon)({
  as: OriginalBookBookmarkIcon,
}) as Component<"svg", IconProps>
