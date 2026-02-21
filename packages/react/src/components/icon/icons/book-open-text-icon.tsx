"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookOpenText as OriginalBookOpenTextIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookOpenTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookOpenTextIcon = component(Icon)({
  as: OriginalBookOpenTextIcon,
}) as Component<"svg", IconProps>
