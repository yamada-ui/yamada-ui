"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { List as OriginalListIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListIcon = component(Icon)({ as: OriginalListIcon }) as Component<
  "svg",
  IconProps
>
