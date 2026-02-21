"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bold as OriginalBoldIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BoldIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BoldIcon = component(Icon)({ as: OriginalBoldIcon }) as Component<
  "svg",
  IconProps
>
