"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookCheck as OriginalBookCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookCheckIcon = component(Icon)({
  as: OriginalBookCheckIcon,
}) as Component<"svg", IconProps>
