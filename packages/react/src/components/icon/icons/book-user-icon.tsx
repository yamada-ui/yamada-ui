"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookUser as OriginalBookUserIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookUserIcon = component(Icon)({
  as: OriginalBookUserIcon,
}) as Component<"svg", IconProps>
