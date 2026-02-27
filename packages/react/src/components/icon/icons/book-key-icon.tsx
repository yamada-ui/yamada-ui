"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookKey as OriginalBookKeyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookKeyIcon = component(Icon)({
  as: OriginalBookKeyIcon,
}) as Component<"svg", IconProps>
