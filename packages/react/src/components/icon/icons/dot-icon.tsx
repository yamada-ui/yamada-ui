"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dot as OriginalDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DotIcon = component(Icon)({ as: OriginalDotIcon }) as Component<
  "svg",
  IconProps
>
