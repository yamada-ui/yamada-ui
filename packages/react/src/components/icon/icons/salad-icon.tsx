"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Salad as OriginalSaladIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SaladIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SaladIcon = component(Icon)({
  as: OriginalSaladIcon,
}) as Component<"svg", IconProps>
