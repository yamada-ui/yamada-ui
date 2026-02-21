"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookDashed as OriginalBookDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookDashedIcon = component(Icon)({
  as: OriginalBookDashedIcon,
}) as Component<"svg", IconProps>
