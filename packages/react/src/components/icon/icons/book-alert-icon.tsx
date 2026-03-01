"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookAlert as OriginalBookAlertIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookAlertIcon = component(Icon)({
  as: OriginalBookAlertIcon,
}) as Component<"svg", IconProps>
