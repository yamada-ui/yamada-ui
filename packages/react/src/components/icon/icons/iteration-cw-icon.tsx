"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { IterationCw as OriginalIterationCwIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `IterationCwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const IterationCwIcon = component(Icon)({
  as: OriginalIterationCwIcon,
}) as Component<"svg", IconProps>
