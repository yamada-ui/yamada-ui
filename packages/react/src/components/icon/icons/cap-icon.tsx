"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cap as OriginalCapIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CapIcon = component(Icon)({ as: OriginalCapIcon }) as Component<
  "svg",
  IconProps
>
