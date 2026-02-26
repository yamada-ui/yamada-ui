"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GeorgianLari as OriginalGeorgianLariIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GeorgianLariIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GeorgianLariIcon = component(Icon)({
  as: OriginalGeorgianLariIcon,
}) as Component<"svg", IconProps>
