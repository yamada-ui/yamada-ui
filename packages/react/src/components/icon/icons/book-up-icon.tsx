"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookUp as OriginalBookUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookUpIcon = component(Icon)({
  as: OriginalBookUpIcon,
}) as Component<"svg", IconProps>
