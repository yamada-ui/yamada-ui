"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { View as OriginalViewIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ViewIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ViewIcon = component(Icon)({ as: OriginalViewIcon }) as Component<
  "svg",
  IconProps
>
