"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookText as OriginalBookTextIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookTextIcon = component(Icon)({
  as: OriginalBookTextIcon,
}) as Component<"svg", IconProps>
