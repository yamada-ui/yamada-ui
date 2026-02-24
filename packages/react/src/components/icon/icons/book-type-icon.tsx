"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookType as OriginalBookTypeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookTypeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookTypeIcon = component(Icon)({
  as: OriginalBookTypeIcon,
}) as Component<"svg", IconProps>
