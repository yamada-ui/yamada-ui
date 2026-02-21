"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookSearch as OriginalBookSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookSearchIcon = component(Icon)({
  as: OriginalBookSearchIcon,
}) as Component<"svg", IconProps>
