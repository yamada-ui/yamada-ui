"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Soup as OriginalSoupIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SoupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SoupIcon = component(Icon)({ as: OriginalSoupIcon }) as Component<
  "svg",
  IconProps
>
