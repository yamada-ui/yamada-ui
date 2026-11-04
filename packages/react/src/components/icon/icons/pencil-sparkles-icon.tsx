"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PencilSparkles as OriginalPencilSparklesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PencilSparklesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PencilSparklesIcon = component(Icon)({
  as: OriginalPencilSparklesIcon,
}) as Component<"svg", IconProps>
