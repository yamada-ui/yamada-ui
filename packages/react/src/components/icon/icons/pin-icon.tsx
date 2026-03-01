"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pin as OriginalPinIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PinIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PinIcon = component(Icon)({ as: OriginalPinIcon }) as Component<
  "svg",
  IconProps
>
