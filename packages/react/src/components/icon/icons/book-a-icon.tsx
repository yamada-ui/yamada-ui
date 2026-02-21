"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookA as OriginalBookAIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookAIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookAIcon = component(Icon)({
  as: OriginalBookAIcon,
}) as Component<"svg", IconProps>
