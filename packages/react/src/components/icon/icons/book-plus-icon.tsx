"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookPlus as OriginalBookPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookPlusIcon = component(Icon)({
  as: OriginalBookPlusIcon,
}) as Component<"svg", IconProps>
