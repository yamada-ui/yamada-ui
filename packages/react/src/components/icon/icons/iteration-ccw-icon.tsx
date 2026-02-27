"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { IterationCcw as OriginalIterationCcwIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `IterationCcwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const IterationCcwIcon = component(Icon)({
  as: OriginalIterationCcwIcon,
}) as Component<"svg", IconProps>
