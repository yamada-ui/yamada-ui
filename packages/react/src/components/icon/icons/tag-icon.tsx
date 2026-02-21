"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tag as OriginalTagIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TagIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TagIcon = component(Icon)({ as: OriginalTagIcon }) as Component<
  "svg",
  IconProps
>
