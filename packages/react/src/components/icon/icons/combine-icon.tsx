"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Combine as OriginalCombineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CombineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CombineIcon = component(Icon)({
  as: OriginalCombineIcon,
}) as Component<"svg", IconProps>
