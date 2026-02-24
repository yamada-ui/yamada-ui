"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookHeart as OriginalBookHeartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookHeartIcon = component(Icon)({
  as: OriginalBookHeartIcon,
}) as Component<"svg", IconProps>
