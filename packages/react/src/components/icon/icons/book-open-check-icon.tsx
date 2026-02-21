"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BookOpenCheck as OriginalBookOpenCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookOpenCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookOpenCheckIcon = component(Icon)({
  as: OriginalBookOpenCheckIcon,
}) as Component<"svg", IconProps>
