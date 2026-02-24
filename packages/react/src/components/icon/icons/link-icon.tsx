"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Link as OriginalLinkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LinkIcon = component(Icon)({ as: OriginalLinkIcon }) as Component<
  "svg",
  IconProps
>
