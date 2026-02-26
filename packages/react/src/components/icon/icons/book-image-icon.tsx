"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookImage as OriginalBookImageIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookImageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookImageIcon = component(Icon)({
  as: OriginalBookImageIcon,
}) as Component<"svg", IconProps>
