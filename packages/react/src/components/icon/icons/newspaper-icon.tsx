"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Newspaper as OriginalNewspaperIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NewspaperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NewspaperIcon = component(Icon)({
  as: OriginalNewspaperIcon,
}) as Component<"svg", IconProps>
