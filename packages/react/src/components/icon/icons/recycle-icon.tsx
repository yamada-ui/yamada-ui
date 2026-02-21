"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Recycle as OriginalRecycleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RecycleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RecycleIcon = component(Icon)({
  as: OriginalRecycleIcon,
}) as Component<"svg", IconProps>
