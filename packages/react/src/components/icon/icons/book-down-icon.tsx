"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookDown as OriginalBookDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookDownIcon = component(Icon)({
  as: OriginalBookDownIcon,
}) as Component<"svg", IconProps>
