"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Menu as OriginalMenuIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MenuIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MenuIcon = component(Icon)({ as: OriginalMenuIcon }) as Component<
  "svg",
  IconProps
>
