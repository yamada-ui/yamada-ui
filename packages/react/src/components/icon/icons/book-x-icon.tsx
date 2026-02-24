"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookX as OriginalBookXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookXIcon = component(Icon)({
  as: OriginalBookXIcon,
}) as Component<"svg", IconProps>
