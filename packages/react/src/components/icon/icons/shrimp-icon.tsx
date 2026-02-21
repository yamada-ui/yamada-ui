"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Shrimp as OriginalShrimpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShrimpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShrimpIcon = component(Icon)({
  as: OriginalShrimpIcon,
}) as Component<"svg", IconProps>
