"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookOpen as OriginalBookOpenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookOpenIcon = component(Icon)({
  as: OriginalBookOpenIcon,
}) as Component<"svg", IconProps>
