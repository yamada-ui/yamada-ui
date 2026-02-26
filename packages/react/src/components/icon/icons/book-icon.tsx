"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Book as OriginalBookIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BookIcon = component(Icon)({ as: OriginalBookIcon }) as Component<
  "svg",
  IconProps
>
