"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sparkles as OriginalSparklesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SparklesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SparklesIcon = component(Icon)({
  as: OriginalSparklesIcon,
}) as Component<"svg", IconProps>
