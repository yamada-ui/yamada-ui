"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Subscript as OriginalSubscriptIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SubscriptIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SubscriptIcon = component(Icon)({
  as: OriginalSubscriptIcon,
}) as Component<"svg", IconProps>
