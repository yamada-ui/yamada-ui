"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RedoDot as OriginalRedoDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RedoDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RedoDotIcon = component(Icon)({
  as: OriginalRedoDotIcon,
}) as Component<"svg", IconProps>
