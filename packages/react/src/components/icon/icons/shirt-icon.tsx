"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Shirt as OriginalShirtIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShirtIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShirtIcon = component(Icon)({
  as: OriginalShirtIcon,
}) as Component<"svg", IconProps>
