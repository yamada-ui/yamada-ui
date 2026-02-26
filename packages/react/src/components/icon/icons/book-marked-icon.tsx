"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookMarked as OriginalBookMarkedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookMarkedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookMarkedIcon = component(Icon)({
  as: OriginalBookMarkedIcon,
}) as Component<"svg", IconProps>
