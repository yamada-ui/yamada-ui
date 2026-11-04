"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareSparkles as OriginalSquareSparklesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareSparklesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareSparklesIcon = component(Icon)({
  as: OriginalSquareSparklesIcon,
}) as Component<"svg", IconProps>
