"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TableOfContents as OriginalTableOfContentsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TableOfContentsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TableOfContentsIcon = component(Icon)({
  as: OriginalTableOfContentsIcon,
}) as Component<"svg", IconProps>
